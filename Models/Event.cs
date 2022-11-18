using System;
using System.Collections.Generic;

namespace AngularProject_MeetUp_v4_JT.Models;

public partial class Event
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Description { get; set; }

    public string? Category { get; set; }

    public decimal? Price { get; set; }

    public bool Favorite { get; set; }
}
