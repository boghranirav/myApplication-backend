const { sequelize, Sequelize } = require("../models/index");
const { QueryTypes } = require("sequelize");

String.prototype.replaceLast = function (search, replace) {
    return this.replace(new RegExp(search+"([^"+search+"]*)$"), replace+"$1");
}

const saveData=async (spName,inputParam)=>{
    let spKey='';
    let spKeyValue="{";

    if(inputParam !== null && (typeof inputParam === 'object')){
        inputParam.forEach((value,key)=>{
            spKey+=`:${key.trim()}, `
            spKeyValue+=`"${key.trim()}": "${value.trim()}", `          
        })
    }

    spKey=spKey.replaceLast(",","");
    spKeyValue=spKeyValue.replaceLast(",","");
    spKeyValue+="}"

    let spOutput;
    try{
    const replacementObj=JSON.parse(spKeyValue);
    spOutput= await sequelize.query(`CALL ${spName} (${spKey})`, {replacements: {...replacementObj} });
    }catch(error)
    {
        console.log(error.message)
    }
    return spOutput[0][0];
}

module.exports = {
    saveData,
}