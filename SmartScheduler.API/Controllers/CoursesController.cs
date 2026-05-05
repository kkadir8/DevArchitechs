using Microsoft.AspNetCore.Mvc;

namespace SmartScheduler.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CoursesController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        var courses = new[]
        {
            new { Id = 1, Code = "CSE101", Name = "Introduction to Programming", Credit = 4, InstructorName = "Dr. Ayse Demir" },
            new { Id = 2, Code = "MTH204", Name = "Linear Algebra", Credit = 3, InstructorName = "Prof. Mehmet Kaya" },
            new { Id = 3, Code = "AI310", Name = "Artificial Intelligence", Credit = 4, InstructorName = "Assoc. Prof. Elif Yilmaz" }
        };

        return Ok(courses);
    }
}
