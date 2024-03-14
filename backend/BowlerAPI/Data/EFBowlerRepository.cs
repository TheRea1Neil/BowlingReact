using BowlerAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace BowlerAPI.Data
{
    public class EFBowlerRepository : IBowlerRepository
    {
        private BowlingLeagueContext _context;

        public EFBowlerRepository(BowlingLeagueContext context)
        {
            _context = context;
        }

        public IEnumerable<Bowler> Bowlers => _context.Bowlers;
    }
}
