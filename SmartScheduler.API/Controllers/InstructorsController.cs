using Microsoft.AspNetCore.Mvc;

namespace SmartScheduler.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class InstructorsController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        var instructors = new[]
        {
            new { Id = 1, Name = "Dr. Ayse Demir", Title = "Assistant Professor", Department = "Computer Engineering" },
            new { Id = 2, Name = "Prof. Mehmet Kaya", Title = "Professor", Department = "Mathematics" },
            new { Id = 3, Name = "Assoc. Prof. Elif Yilmaz", Title = "Associate Professor", Department = "Software Engineering" }
        };

        return Ok(instructors);
    }
}
