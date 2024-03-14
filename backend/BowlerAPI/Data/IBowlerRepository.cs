using BowlerAPI.Models;

namespace BowlerAPI.Data
{
    public interface IBowlerRepository
    {
        IEnumerable<Bowler> Bowlers { get; }
    }
}
