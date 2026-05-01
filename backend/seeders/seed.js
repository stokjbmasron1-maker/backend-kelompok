require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const bcrypt = require('bcryptjs');
const { sequelize, User, Article, Teacher, Program, ProgramFeature, FAQ, Testimonial } = require('../models');

const run = async () => {
  await sequelize.sync({ force: true });

  await User.create({
    username: 'admin',
    email: 'admin@js1academy.com',
    password_hash: await bcrypt.hash('admin123', 10),
  });

  await Article.bulkCreate([
    {
      title: '5 Tips Efektif Belajar Matematika',
      author: 'Stevania, S.Kom., M.Pd.',
      published_date: '2020-10-15',
      image_path: '/uploads/matematika.jpg',
      preview: 'Matematika seringkali menjadi momok menakutkan bagi sebagian besar siswa.',
      content: `Matematika seringkali menjadi momok menakutkan bagi sebagian besar siswa. Padahal, dengan pendekatan yang tepat, matematika bisa menjadi pelajaran yang menyenangkan.\n\n1. Pahami Konsep Dasar, Jangan Hafal Rumus\nAlih-alih menghafal rumus, fokuslah memahami mengapa rumus tersebut ada dan bagaimana cara kerjanya.\n\n2. Banyak Berlatih Soal\nKuantitas latihan soal sangat berpengaruh dalam meningkatkan kemampuan matematika.\n\n3. Manfaatkan Visualisasi\nGunakan diagram, grafik, atau gambar untuk membantu memahami soal abstrak.\n\n4. Belajar Kelompok atau Diskusi\nBerdiskusi dengan teman dapat membuka perspektif baru dalam memecahkan soal.\n\n5. Jangan Malu Bertanya\nBertanya kepada guru atau teman adalah cara paling efektif untuk mengatasi kebuntuan.`,
    },
    {
      title: 'Menghadapi UTBK: Strategi Jitu Agar Tidak Grogi',
      author: 'Tim JS-1 Academy',
      published_date: '2024-12-29',
      image_path: '/uploads/utbk.jpg',
      preview: 'Tekanan saat ujian UTBK bisa sangat besar. Berikut strategi untuk mengatasinya.',
      content: `Tekanan saat ujian UTBK bisa sangat besar. Berikut strategi untuk mengatasinya.\n\n1. Persiapan Matang adalah Fondasi Kepercayaan Diri\nPersiapan yang baik dimulai jauh sebelum hari-H.\n\n2. Simulasi Ujian Sesungguhnya\nLakukan simulasi dengan kondisi semirip mungkin dengan ujian asli.\n\n3. Atur Pola Tidur dan Makan Sebelum Hari-H\nPastikan tubuhmu dalam kondisi prima.\n\n4. Kuasai Teknik Relaksasi Cepat\nLatih teknik pernapasan untuk mengurangi kecemasan.\n\n5. Fokus pada Satu Soal dalam Satu Waktu\nJangan panik jika ada soal yang sulit, lewati dan kembali kemudian.`,
    },
    {
      title: 'Pentingnya Memilih Jurusan Sesuai Minat dan Bakat',
      author: 'Jenisa Lauren, S.Kom.',
      published_date: '2025-02-05',
      image_path: '/uploads/jurusan.jpg',
      preview: 'Memilih jurusan kuliah adalah salah satu keputusan terpenting dalam hidup.',
      content: `Memilih jurusan kuliah adalah salah satu keputusan terpenting dalam hidup.\n\n1. Minat adalah Bahan Bakar Motivasi\nKetika kamu menyukai apa yang kamu pelajari, motivasi akan datang secara alami.\n\n2. Bakat adalah Modal Dasar Keunggulan\nBakat yang diasah dengan baik akan menghasilkan keunggulan kompetitif.\n\n3. Menghindari Stres dan Penyesalan di Masa Depan\nMemilih jurusan yang sesuai akan membuat perjalanan kuliah lebih menyenangkan.\n\n4. Membangun Karir yang Berkelanjutan\nKarir yang dibangun di atas minat dan bakat cenderung lebih bertahan lama.\n\n5. Bagaimana Cara Menemukannya?\nCoba berbagai kegiatan, ikuti tes minat bakat, dan konsultasikan dengan orang yang berpengalaman.`,
    },
  ]);

  await Teacher.bulkCreate([
    {
      name: 'Stevania',
      credentials: 'S.Kom., M.Pd.',
      role: 'Kepala Program Matematika',
      bio: 'Pengalaman mengajar lebih dari 10 tahun. Spesialis dalam matematika kompetisi.',
      image_path: '/uploads/stevania.png',
    },
    {
      name: 'Jenisa Lauren',
      credentials: 'S.Kom.',
      role: 'Kepala Program Teknologi',
      bio: 'Lulusan terbaik Universitas Mikroskil. Membuat konsep pembelajaran terkait analisis hitungan & logika menjadi akurat.',
      image_path: '/uploads/jenisa.jpg',
    },
  ]);

  const programs = await Program.bulkCreate([
    { name: 'SD Bimbingan', level: 'SD', description: 'Membangun fondasi kuat untuk siswa SD kelas 4-6.', image_path: '/uploads/sd.jpg', price: 470000, schedule_days: 'Sabtu & Minggu', schedule_time: '08:00 - 11:00 WIB' },
    { name: 'SMP Bimbingan', level: 'SMP', description: 'Persiapan matang menuju jenjang berikutnya untuk siswa SMP kelas 7-9.', image_path: '/uploads/smp.jpg', price: 580000, schedule_days: 'Selasa & Kamis', schedule_time: '13:00 - 15:00 WIB' },
    { name: 'SMA Bimbingan', level: 'SMA', description: 'Menguasai materi & persiapan untuk siswa SMA kelas 10-11.', image_path: '/uploads/sma.jpg', price: 630000, schedule_days: 'Senin & Rabu', schedule_time: '15:00 - 17:00 WIB' },
    { name: 'UTBK Bimbingan', level: 'UTBK', description: 'Program super intensif persiapan UTBK masuk perguruan tinggi negeri.', image_path: '/uploads/utbk-program.jpg', price: 890000, schedule_days: "Selasa, Jum'at, Sabtu", schedule_time: '17:00 - 19:00 WIB' },
  ]);

  await ProgramFeature.bulkCreate([
    { program_id: programs[0].id, feature_text: 'Kurikulum sesuai standar nasional', order_num: 1 },
    { program_id: programs[0].id, feature_text: 'Pengajar berpengalaman', order_num: 2 },
    { program_id: programs[0].id, feature_text: 'Kelas kecil maksimal 10 siswa', order_num: 3 },
    { program_id: programs[1].id, feature_text: 'Materi lengkap semua mata pelajaran', order_num: 1 },
    { program_id: programs[1].id, feature_text: 'Try out rutin setiap bulan', order_num: 2 },
    { program_id: programs[1].id, feature_text: 'Konsultasi belajar gratis', order_num: 3 },
    { program_id: programs[2].id, feature_text: 'Persiapan ujian nasional intensif', order_num: 1 },
    { program_id: programs[2].id, feature_text: 'Latihan soal berbasis HOTS', order_num: 2 },
    { program_id: programs[2].id, feature_text: 'Bimbingan karir dan jurusan', order_num: 3 },
    { program_id: programs[3].id, feature_text: 'Simulasi UTBK setiap minggu', order_num: 1 },
    { program_id: programs[3].id, feature_text: 'Pembahasan soal UTBK tahun lalu', order_num: 2 },
    { program_id: programs[3].id, feature_text: 'Strategi mengerjakan soal cepat', order_num: 3 },
    { program_id: programs[3].id, feature_text: 'Motivasi dan manajemen stres ujian', order_num: 4 },
  ]);

  await FAQ.bulkCreate([
    { question: 'Apa saja persyaratan untuk mendaftar?', answer: 'Mengisi formulir pendaftaran, melampirkan rapor terakhir, dan membayar biaya pendaftaran.', order_num: 1 },
    { question: 'Apakah ada kelas trial?', answer: 'Ya, tersedia kelas trial gratis selama 2 sesi. Hubungi admin untuk menjadwalkan.', order_num: 2 },
    { question: 'Bagaimana sistem pembayarannya?', answer: 'Pembayaran dapat dilakukan per bulan, semester, atau tahunan melalui transfer bank atau tunai di kantor kami.', order_num: 3 },
    { question: 'Apakah ada jaminan siswa akan naik kelas?', answer: 'Kami tidak memberikan jaminan 100%, karena keberhasilan bergantung pada usaha siswa. Namun kami berkomitmen memberikan bimbingan terbaik.', order_num: 4 },
  ]);

  await Testimonial.bulkCreate([
    { name: 'Rina', role_type: 'student', quote: 'Berkat JS-1 Academy, nilai matematika saya naik drastis dan saya berhasil masuk SMA favorit!' },
    { name: 'Bapak Ahmad', role_type: 'parent', quote: 'Anak saya jadi lebih percaya diri dan semangat belajar setelah bergabung dengan JS-1 Academy.' },
    { name: 'Budi', role_type: 'alumni', quote: 'JS-1 Academy membantu saya lulus UTBK dan masuk ke universitas impian. Terima kasih!' },
  ]);

  console.log('Seed berhasil!');
  await sequelize.close();
};

run().catch(console.error);
