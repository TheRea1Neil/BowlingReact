using BowlerAPI.Models;

namespace BowlerAPI.Data
{
    public interface ITeamRepository
    {
        IEnumerable<Team> Teams { get; }
        Team GetTeamById(int teamId);
    }
}
