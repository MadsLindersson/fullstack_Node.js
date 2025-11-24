import bcrypt from 'bcryptjs';

const saltRounds = 14;

async function hashPassword (password)    {
    return await bcrypt.hash(password, saltRounds);
}

// TODO: dbPassword skal komme fra DB
async function comparePasswords (password, userPassword)  {
    return await bcrypt.compare(password, userPassword);
}

export default { hashPassword, comparePasswords };