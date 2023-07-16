const { insertProject} = require("../Model/project");
const createProjectLayer = (req,resp)=>{
  insertProject(req,resp);
  //console.log(req.body);
};

const{ updateProject}=require("../Model/project");
 const updateProjectLayer=(req,resp)=>{
   updateProject(req,resp);
};

const{deleteProject}= require("../Model/project");
const deleteProjectLayer= (req,resp)=>{
  deleteProject(req,resp);
}
module.exports={deleteProjectLayer,updateProjectLayer,createProjectLayer};