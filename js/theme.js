(function ($) {
  "use strict";

  $(".skill_main").each(function () {
    $(this).waypoint(
      function () {
        var progressBar = $(".progress-bar");
        progressBar.each(function (indx) {
          $(this).css("width", $(this).attr("aria-valuenow") + "%");
        });
      },
      {
        triggerOnce: true,
        offset: "bottom-in-view",
      }
    );
  });
})(jQuery);

/* Custom js*/

function my_technologies() {
  const techs = [
    "PHP",
    "Python",
    "NodeJs",
    "Laravel",
    "Codeigniter",
    "ExpressJs",
    "VueJs",
    "ReactJs",
    "API",
    "Web Scrapping",
    "Linux",
    "Apache",
    "Nginx",
    "Docker",
    "WHMCS",
    "PHPFox",
    "Django",
    "Flask",
    "MySQL",
    "MariaDB",
    "PgSQL",
    "Git",
    "Linux",
  ];
  const upcoming_techs = [
    "Data Science",
    "Machine Learning",
    "AI",
    "Data Analysis",
    "Data Mining",
    "Data Mugging",
    "Game Devlopment",
  ];
  for (i = 0; i < techs.length; i++) {
    $("#platform").append(`<li class="platform_item"><a>${techs[i]}</a></li>`);
  }
  for (i = 0; i < upcoming_techs.length; i++) {
    $("#up_platform").append(
      `<li class="platform_item"><a>${upcoming_techs[i]}</a></li>`
    );
  }
}
function my_experiense() {
  const experience = [
    {
      organization: "Cloud Production",
      duration: "Jan 2020 to present",
      position: "Project Manager",
      address: "Dhaka, Bangladesh",
    },
    {
      organization: "SHURJOMUKHI LTD",
      duration: "Feb 2017 to Jan 2020",
      position:
        "Project Manager (Acting) <br/> Team Lead (Promoted) <br/> Senior SE (Recruited)",
      address: "Dhaka, Bangladesh",
    },
    {
      organization: "RBS TECH LTD",
      duration: "Dec 2014 to Jan 2017",
      position: "Senior Web Developer",
      address: "Dhaka, Bangladesh",
    },
    {
      organization: "N.I BIZ SOFT",
      duration: "Jan 2014 to Nov 2014",
      position: "Software Programmer",
      address: "Dhaka, Bangladesh",
    },
    {
      organization: "BDCHATRO.COM",
      duration: "June 2012 to Dec 2013",
      position: "PHP Programmer",
      address: "Dhaka, Bangladesh",
    },
    {
      organization: "jobsbd.com",
      duration: "Mar 2012 to May 2012 ",
      position: "PHP Programmer",
      address: "Dhaka, Bangladesh",
    },
  ];
  experience.forEach((currentValue, index, arr) => {
    $("#experience").append(`
        <li>
            <span></span>
            <div class="media">
                <div class="d-flex">
                    <p>${currentValue.duration} </p>
                </div>
                <div class="media-body">
                    <h4>${currentValue.organization}</h4>
                    <p>
                        ${currentValue.position}  <br/>										
                        ${currentValue.address}</p>
                </div>
            </div>
        </li>
        
        `);
  });
}
function load_skill() {
  const skills = [
    { name: "Team Leading", percentage: 85 },
    { name: "Requirement Analysis", percentage: 70 },
    { name: "Project Management", percentage: 70 },
    { name: "System Architecture", percentage: 60 },
    { name: "Self Motivated", percentage: 85 },
  ];
  skills.forEach((skill) => {
    $(".skill_main").append(
      `<div class="skill_item">
            <h4>${skill.name}</h4>
            <div class="progress_br">
                <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="${skill.percentage}" aria-valuemin="0" aria-valuemax="100" style="width: 90%;"></div>
                </div>
            </div>
        </div>
        `
    );
  });
}

function portfolio() {
  projects = [
    {
      name: "Join Bangladesh Army",
      link: "https://joinbangladesharmy.army.mil.bd/",
      about:
        "Bangladesh Army Officer recruiment portal. Payment gateway, sms gateway, USSD payment gateway are integrated with system.",
      technology: "ASP.net , MsSQL, AngularJs",
      responsibility:
        "System Design, Database Design,Project Management,Client Communication",
    },
    {
      name: "Ansar & VDP ERP",
      link: "https://www.bdansarerp.gov.bd/",
      about:
        "ANSAR & VDP human resource management and job application portal. Payemnt gateway, SMS gateway, USSD , short code services are integrated with the system. ",
      technology: "Laravel, MySQL, NodeJs, AngularJs",
      responsibility: "Team Management, System Management,API Development",
    },
    {
      name: "shurjoEMS",
      link: "https://www.bisc.shurjoems.com/",
      about:
        "A complete school management software with online payment and sms service.",
      technology: "Laravel, MySQL, Jquery, VueJS",
      responsibility: "",
    },
    {
      name: "shurjoPay",
      link: "https://www.shurjopay.com.bd/",
      about:
        "A payment gateway with PSO license from Bangladesh Bank. Tunnel, REST and SOAP based service are integrated with system.",
      technology: "Raw PHP, Codeigniter, NodeJs, MySQL, Linux",
      responsibility: "Team Lead, API integration",
    },
    {
      name: "praniSheba",
      link: "https://pranisheba.com.bd/",
      about:
        "shurjoMukhi praniSheba is a IoT and RFID based solution to manage herd.",
      technology: "Python, Django, PgSQL",
      responsibility:
        "Team Lead, API integration, API development and requirement analysis",
    },
    {
      name: "BCS18 Forum",
      link: "#",
      about:
        "BCS18 forum is intenal network between 18th BCS member. It's android app. I have worked as backend developer.",
      technology: "Python, Django, MySQL",
      responsibility: "Team Lead, API development and requirement analysis",
    },
    {
      name: "shurjoBarta",
      link: "http://shurjobarta.com.bd/",
      about:
        "A sms gateway service. Internaltional and local sms gateway are connected with this system as a service.",
      technology: "PHP, Codeigniter, NodeJs",
      responsibility: "Team Lead, API development, API integration",
    },
    {
      name: "payPoint",
      link: "https://paypoint.com.bd/",
      about:
        "payPoint is the ultimate destination to recharge any Bangladeshi mobile operator. More or less all mobile operator are connected with this system as aservice.",
      technology: "PHP, Codeigniter, NodeJs",
      responsibility: "Team Lead, API integration",
    },
    {
      name: "payPoint",
      link: "https://paypoint.com.bd/",
      about:
        "payPoint is the ultimate destination to recharge any Bangladeshi mobile operator. More or less all mobile operator are connected with this system as aservice.",
      technology: "PHP, Codeigniter, NodeJs",
      responsibility: "Team Lead, API integration",
    },
    {
      name: "Bangladesh Ordnance Factories",
      link: "http://www.bof.gov.bd/",
      about:
        "The project was about requirement gathering and analysis for ERP devlopment.",
      technology: "",
      responsibility: "Team Lead, Perpare BRD",
    },
    {
      name: "ERP.CASH",
      link: "https://erp.cash/",
      about:
        "The project was about management of telecommunication sites/projects for vendor. It was a R&D project with good success.",
      technology: "PHP, Codeigniter, Mysql",
      responsibility: "Reserch and application development.",
    },
    {
      name: "servermore.com",
      link: "https://www.servermore.com/",
      about: "It was a total hosting management site buit with WHMCS.",
      technology: "PHP, Eloquent, WHMCS, MySQL",
      responsibility: "Develop small services and monitoring",
    },
    {
      name: "TRNB.ORG",
      link: "https://www.trnb.org/",
      about:
        "It was a dynamic wordpress based site for Tele-communication reporters.",
      technology: "PHP, Wordpres",
      responsibility: "Development and Design",
    },
    {
      name: "BDGIFT.COM",
      link: "https://www.bdgift.com/",
      about: "It was a e-commerce site buit with magento.",
      technology: "PHP, magento, mysql",
      responsibility: "Development",
    },
    {
      name: "Email Marketing Software",
      link: "#",
      about: "An email marketing web applcation for jobsbd.com",
      technology: "PHP, Codeigniter , MySQL",
      responsibility: "Development",
    },
    {
      name: "Other Projects",
      link: "#",
      about:
        "I have worked with many custom web application for companies client. Those projects domain are not available to me as per company policy. ",
      technology: "PHP, magento, mysql",
      responsibility: "Development and Design",
    },
  ];

  projects.forEach((project) => {
    $("#projects").append(`
    <div class="col-lg-6 col-md-6">
        <div class="feature_item">
            <h4><a href="${project.link}">${project.name}</a></h4>
            <p><strong>About : </strong>${project.about}</p>
            <p><strong>Responsibility : </strong>${project.responsibility}</p>
            <p><strong>Technology : </strong>${project.technology}</p>
        </div>
    </div>    
    `);
  });
}

$(document).ready(function () {
  // populate technologies
  my_technologies();
  //load experience
  my_experiense();
  //load skill
  load_skill();
  //load projects

  portfolio();
});
