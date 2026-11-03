import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://drzzwfjihvuirydrufzb.supabase.co'
const supabaseKey = 'sb_publishable_MdtsIoyOC32FthmMSqZ9Zw_S6XZ7ElU'
const supabase = createClient(supabaseUrl, supabaseKey)
async function obtenerEstudiantes() {
 const { data, error } = await supabase
 .from('Estudiantes')
 .select('*')
 if (error) {
 console.log('Error:', error)
 } else {
 console.log('Datos:', data)
 }
}
obtenerEstudiantes()