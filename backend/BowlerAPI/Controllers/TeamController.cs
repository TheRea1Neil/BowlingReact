using BowlerAPI.Data;
using BowlerAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BowlerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamController : ControllerBase
    {
        private ITeamRepository _teamRepository;

        public TeamController(ITeamRepository teamRepository)
        {
            _teamRepository = teamRepository;
        }

        [HttpGet("{teamId}")]
        public ActionResult<Team> GetTeamById(int teamId)
        {
            var team = _teamRepository.Teams.FirstOrDefault(t => t.TeamId == teamId);

            if (team == null)
            {
                return NotFound();
            }

            return Ok(team.TeamName);
        }
    }
}
