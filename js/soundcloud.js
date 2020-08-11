'use strict';

export function f_soundcloud(s_id_2, s_id_3) {
   const m_in = {};
   // accepts "true" but not "1"
   m_in.hide_related = true;
   // optional
   m_in.show_comments = false;
   // required
   m_in.url = 'api.soundcloud.com/tracks/' + s_id_2;
   // optional
   m_in.visual = true;
   const m_out = {};
   const o_in = new URLSearchParams(m_in);
   m_out.href = 'https://w.soundcloud.com/player?' + o_in.toString();
   m_out.src = 'https://i1.sndcdn.com/artworks-' + s_id_3 + '-t500x500.jpg';
   return m_out;
}