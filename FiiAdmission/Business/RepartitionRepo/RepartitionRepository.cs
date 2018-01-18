using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Business.CandidatesRepo;
using Data.Domain;
using Data.Persistence.ContentDb;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Business.RepartitionRepo
{
    public class RepartitionRepository : IRepartitionRepository
    {
        private readonly IContentDbContext _databaseContext;
        private readonly ILogger _logger;
        private readonly ICandidateRepository _candidateRepository;
        public RepartitionRepository(IContentDbContext databaseContext, ILoggerFactory loggerFactory, ICandidateRepository candidateRepository)
        {
            _databaseContext = databaseContext;
            _candidateRepository = candidateRepository;
            _logger = loggerFactory.CreateLogger(nameof(RepartitionRepository));
        }

        public async Task<Boolean> GenerateRepartition(RepartitionConfiguration configuration)
        {
            //Get Capacity
            try
            {
                int capacity = 0;
                foreach (var classroom in configuration.AvailableClassrooms)
                {
                    capacity = capacity + classroom.Capacity;
                }

        
                if (_candidateRepository.GetApprovedCandidatesNumber() > capacity)
                {
                    return false;
                }

                var approvedCandidates = await _candidateRepository.GetApprovedCandidates();

                List<Candidate> sortedCandidatesList =
                    approvedCandidates.OrderBy(c => c.LastName).ThenBy(c => c.FirstName).ToList();

                List<Classroom> sortedClassroomslist =
                    configuration.AvailableClassrooms.OrderBy(c => c.Capacity).ToList();

                var infoSubjectClassRoom = sortedClassroomslist[0];
                sortedClassroomslist.Remove(infoSubjectClassRoom);
                var mateSubjectClassRoom = sortedClassroomslist[0];
                sortedClassroomslist.Remove(mateSubjectClassRoom);
                _databaseContext.Repartitions.RemoveRange(await _databaseContext.Repartitions.ToListAsync());
                _databaseContext.Classrooms.RemoveRange(await _databaseContext.Classrooms.ToListAsync());
                await _databaseContext.SaveChangesAsync();
                foreach (var candidate in sortedCandidatesList)
                {
                    if (mateSubjectClassRoom.Capacity == 0)
                    {
                        if (sortedClassroomslist.Count != 0)
                        {
                            mateSubjectClassRoom = sortedClassroomslist[0];
                            sortedClassroomslist.Remove(mateSubjectClassRoom);
                        }
                        else
                        {
                            mateSubjectClassRoom = infoSubjectClassRoom;
                        }
                    }

                    if (infoSubjectClassRoom.Capacity == 0)
                    {
                        if (sortedClassroomslist.Count != 0)
                        {
                            infoSubjectClassRoom = sortedClassroomslist[0];
                            sortedClassroomslist.Remove(infoSubjectClassRoom);
                        }
                        else
                        {
                            infoSubjectClassRoom = mateSubjectClassRoom;
                        }
                    }

                    if (candidate.Subject.Equals("Mathematics"))
                    {
                        var repartition = new Repartition
                        {
                            ApprovedCandidateEmail = candidate.Email,
                            ExamTime = configuration.ExamTime,
                            RClassroom = mateSubjectClassRoom
                        };
                        _databaseContext.Repartitions.Add(repartition);
                        mateSubjectClassRoom.Capacity--;

                    }
                    if (candidate.Subject.Equals("Informatics (Pascal)") ||
                        candidate.Subject.Equals("Informatics (C/C++)"))
                    {
                        var repartition = new Repartition
                        {
                            ApprovedCandidateEmail = candidate.Email,
                            ExamTime = configuration.ExamTime,
                            RClassroom = infoSubjectClassRoom
                        };
                        _databaseContext.Repartitions.Add(repartition);
                        infoSubjectClassRoom.Capacity--;
                    }


                }
                // de continuat algorimul (ai toate datele necesare acum)
                await _databaseContext.SaveChangesAsync();
            }catch (Exception exp)
            {
                _logger.LogError($"Error in {nameof(GenerateRepartition)}: " + exp.Message);
                return false;
            }

            return true;
        }

        public async Task<List<Classroom>> GetAllClassrooms()
        {
            return await _databaseContext.Classrooms.ToListAsync();
        }

        public async Task<Repartition> GetCandidateRepartition(string email)
        {
            return await _databaseContext.Repartitions.Include(c => c.RClassroom).SingleOrDefaultAsync(c =>
                c.ApprovedCandidateEmail.Equals(email));
        }

        public async Task<PagingResult<Repartition>> GetCandidatesPageAsync(string classRoomName)
        {
            var totalRecords = await _databaseContext.Repartitions.CountAsync(c => c.RClassroom.Name.Equals(classRoomName));
          
            var repartitions = await _databaseContext.Repartitions
                .Where(c=>c.RClassroom.Name.Equals(classRoomName)).Include(c=>c.RClassroom)
                .ToListAsync();
            return new PagingResult<Repartition>(repartitions, totalRecords);
        }

    }
}
