using BowlerAPI.Data;
using BowlerAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BowlerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {

        private IBowlerRepository _bowlerRepository;

        public BowlerController(IBowlerRepository temp)
        {
            _bowlerRepository = temp;
        }
        [HttpGet]
        public IEnumerable<Bowler> Get() {
            var bowlerData = _bowlerRepository.Bowlers.ToArray();
            return bowlerData;
        }

        

    }
}
