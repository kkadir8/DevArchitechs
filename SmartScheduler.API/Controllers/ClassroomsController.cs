using Microsoft.AspNetCore.Mvc;

namespace SmartScheduler.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ClassroomsController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        var classrooms = new[]
        {
            new { Id = 1, Name = "A-101", Capacity = 40, HasLab = false },
            new { Id = 2, Name = "B-202 Lab", Capacity = 30, HasLab = true },
            new { Id = 3, Name = "C-303", Capacity = 55, HasLab = false }
        };

        return Ok(classrooms);
    }
}
