import Users from "./user.model.js";

const addUserRepo = async ({ fullName, email, password }) => {
  const fullName1 =
    fullName.firstName + " " + fullName.middleName + " " + fullName.lastName;
  const newUser = await Users.insertOne({
    fullName: fullName1,
    email,
    password,
  });
  return newUser;
};

const getUserByIdRepo = async (_id) => {
  return await Users.findById(_id);
};

const getUserByMailRepo = async (email) => {
  return await Users.findOne({ email });
};

const removeUserRepo = async (_id) => {
  return await Users.deleteOne({ _id });
};

export { addUserRepo, getUserByIdRepo, getUserByMailRepo, removeUserRepo };
