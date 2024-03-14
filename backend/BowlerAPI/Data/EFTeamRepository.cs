using BowlerAPI.Models;
using Microsoft.EntityFrameworkCore;
namespace BowlerAPI.Data
{
    public class EFTeamRepository : ITeamRepository
    {
        private readonly BowlingLeagueContext _context;

        public EFTeamRepository(BowlingLeagueContext context)
        {
            _context = context;
        }

        public IEnumerable<Team> Teams => _context.Teams;

        public Team GetTeamById(int teamId)
        {
            return _context.Teams
                .FirstOrDefault(t => t.TeamId == teamId);
        }
    }
}
