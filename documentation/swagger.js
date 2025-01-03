const config = require(`../helper/config/config`);


// ---------------------- Import Docs From Content Folder --------------------------

const studentDoc = require(`./content/student.doc`);
const adminDoc = require(`./content/admin.doc`);
const coursesDoc = require(`./content/courses.doc`);
const skillDoc = require(`./content/skill.doc`);
const mentorDoc = require(`./content/mentor.doc`);
const projectDoc = require(`./content/project.doc`);
const residencyDoc = require(`./content/residency.doc`);
const recordedSessionDoc = require(`./content/recordSession.doc`);
const liveSessionDoc = require(`./content/liveSessions.doc`);



// ---------------------- Swagger --------------------------

module.exports ={
    swagger : "2.0",
    ifno :{
        version : "1.0.0",
        title : "Makers Asylum Application",
        description : "Learning Management System Application's API",
        licenece :{
            name :"MIT",
            url: "https://opensource.org/licenses/MIT"
        }
    },
    host : config.SWAGGERPORT,
    basePath : "/",
    schemes : [`http`],
    consumes : [`application/json`],
    produces : [`application/json`],
    tages: [
        //Optional
    ],

    // -------- Security definations ---------------
    securityDefinitions : {
        JWT : {
            type : "apiKey",
            name : "Authorization",
            in :"header"
        }
    },


    // ----------- Definations -----------------------

    defination : {
        ...studentDoc.defination,
        ...adminDoc.defination,
        ...coursesDoc.defination,
        ...skillDoc.defination,
        ...mentorDoc.defination,
        ...projectDoc.defination,
        ...residencyDoc.defination,
        ...recordedSessionDoc.defination,
        ...liveSessionDoc.defination
    },

    // ----------- Pahts ------------------------------
    paths : {
        ...studentDoc.path,
        ...adminDoc.path,
        ...coursesDoc.path,
        ...skillDoc.path,
        ...mentorDoc.path,
        ...projectDoc.path,
        ...residencyDoc.path,
        ...recordedSessionDoc.path,
        ...liveSessionDoc.path   
    }
};