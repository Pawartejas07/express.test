const bcryptjs = require('bcryptjs');
const userModel = require('../modal/usermodel');
const blogModel = require('../modal/blogmodel');

const register = async (req,resp) => {
    try {
        const {uname,email,pass} = req.body
        const hashPassword = await bcryptjs.hash(pass,10)
        await userModel.create({uname,email,pass:hashPassword})
        resp.redirect("/login")
    } catch (error) {
        console.log(error);
        resp.redirect("/")
    }
}

const login = async(req,resp)=>{
    try {
        const {uname,pass}= req.body
        const user  = await userModel.findOne({uname})
        if (user && await bcryptjs.compare(pass,user.pass)) {
            req.session.name = uname
            resp.redirect("/dashboard")
        } else {
            resp.redirect("/login")
        }
    } catch (error) {
        console.log(error)
    }
}

const dashboard = async (req,resp) => {
    try {
        if (req.session.name) {
            const data = await blogModel.find()
            resp.render("home",{uname:req.session.name, data})
        } else {
            resp.redirect("/login")
        }
    } catch (error) {
        console.log(error);
    }
}

const logout = async (req,resp) => {
    req.session.destroy(()=>{
        resp.redirect("/login")
    })
}

module.exports = {register, login, logout, dashboard}