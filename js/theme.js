;(function($){
    "use strict"
	
	

	$(".skill_main").each(function() {
        $(this).waypoint(function() {
            var progressBar = $(".progress-bar");
            progressBar.each(function(indx){
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'

        });
    });
	
	
	

})(jQuery)












/* Custom js*/

function my_technologies(){
    const techs = ['PHP','Python','NodeJs','Laravel','Codeigniter','ExpressJs','VueJs','ReactJs','API',
    'Web Scrapping','Linux','Apache','Nginx','Docker','WHMCS','PHPFox','Django','Flask', 'MySQL','MariaDB','PgSQL','Git','Linux']
    const upcoming_techs = ['Data Science','Machine Learning','AI','Data Analysis','Data Mining','Data Mugging','Game Devlopment']
    for(i=0; i < techs.length; i++){
        $('#platform').append(`<li class="platform_item"><a>${techs[i]}</a></li>`);
    }
    for(i=0; i < upcoming_techs.length; i++){
        $('#up_platform').append(`<li class="platform_item"><a>${upcoming_techs[i]}</a></li>`);
    }
}
function my_experiense(){
    const experience = [
        {organization: "Cloud Production",duration: "Jan 2020 to present",position: "Project Manager",address: "Dhaka, Bangladesh"},
        {organization: "SHURJOMUKHI LTD",duration: "Feb 2017 to Jan 2020",position: "Project Manager (Acting) <br/> Team Lead (Promoted) <br/> Senior SE (Recruited)",address: "Dhaka, Bangladesh"},
        {organization: "RBS TECH LTD",duration: "Dec 2014 to Jan 2017",position: "Senior Web Developer",address: "Dhaka, Bangladesh"},
        {organization: "N.I BIZ SOFT",duration: "Jan 2014 to Nov 2014",position: "Software Programmer",address: "Dhaka, Bangladesh"},
        {organization: "BDCHATRO.COM",duration: "June 2012 to Dec 2013",position: "PHP Programmer",address: "Dhaka, Bangladesh"},
        {organization: "jobsbd.com",duration: "Mar 2012 to May 2012 ",position: "PHP Programmer",address: "Dhaka, Bangladesh"},

    ]
    experience.forEach((currentValue,index, arr)=>{
        $('#experience').append(`
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
        
        `)
        
    })
}
function load_skill(){
    const skills = [
        {name: "Team Leading", percentage: 85},
        {name: "Requirement Analysis", percentage: 70},
        {name: "Project Management", percentage: 70},
        {name: "System Architecture", percentage: 60},
        {name: "Self Motivated", percentage: 85},
    ]
    skills.forEach((skill) => {
        $('.skill_main').append(
            `<div class="skill_item">
                <h4>${skill.name}</h4>
                <div class="progress_br">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="${skill.percentage}" aria-valuemin="0" aria-valuemax="100" style="width: 90%;"></div>
                    </div>
                </div>
            </div>
            `
        )
    })
}

$(document).ready(function(){
    // populate technologies
    my_technologies();
    //load experience
    my_experiense();
    //load skill
    load_skill();				
})