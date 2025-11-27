import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const connectDB = async () => {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.log("Supabase connection check completed");
    } else {
      console.log("Supabase is connected successfully");
    }
  } catch (error) {
    console.log(error);
  }
};