import bcrypt from 'bcryptjs';

const saltRounds = 14;
//Password = Hej
const dbPassword = "$2b$14$Gxq.FsLKbzsx3xEsvY.11eqn/P/Inzk8FfDgQt.GVkMhklNMv5oDS"

async function hashPassword (password)    {
    return await bcrypt.hash(password, saltRounds);
}

// TODO: dbPassword skal komme fra DB
async function comparePasswords (password)  {
    return await bcrypt.compare(password, dbPassword);
}

export default { hashPassword, comparePasswords };