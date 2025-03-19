import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zzybosclmvmuxnicjqvp.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

class NoteRepository {
  static async getAllNotes() {
    const { data, error } = await supabase.from("Notes").select();
    if (error) throw error;
    return data;
  }

  static async createNote(title, content) {
    const { data, error } = await supabase.from("Notes").insert({
      "title": title,
      "content": content
    });
    if (error) throw error;
    return data;
  }

  static async updateNote(id, title, content) {
    const { data, error } = await supabase.from('Notes').update({ title, content }).eq('id', id);
    if (error) throw error;
    return data;
  }

  static async deleteNote(id) {
    const { data, error } = await supabase.from('Notes').delete().eq('id', id);
    if (error) throw error;
    return data;
  }
}

export default NoteRepository;
