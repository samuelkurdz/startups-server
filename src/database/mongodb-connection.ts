import mongoose from "mongoose";

const uri = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@startups.lhe7z.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;
interface Status {
  error: string | null;
  success: string | null;
}

export const initializeDBConnection = async () => {
  const result: Status = {
    error: null,
    success: null,
  };

  try {
    await mongoose.connect(uri);
    return {
      ...result,
      success: "Database is connected and running",
    };
  } catch (error) {
    return {
      ...result,
      error,
    };
  }
};

//  password => SamuelRed
// mongodb+srv://samuelred:<password>@startups.lhe7z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
