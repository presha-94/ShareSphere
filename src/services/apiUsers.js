import supabase from './supabase';

export async function getUsers() {
  let { data, error } = await supabase.from('users').select('*');
  if (error) {
    console.error(error);
    throw new Error('Users could not be loaded');
  }
  return data;
}
