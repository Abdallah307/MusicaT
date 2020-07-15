-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 16, 2020 at 06:00 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `database1`
--

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `userEmail` varchar(250) COLLATE utf8_turkish_ci NOT NULL,
  `songName` varchar(250) COLLATE utf8_turkish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`userEmail`, `songName`) VALUES
('nuh@gmail.com', 'Helal Etmiyorum'),
('john@gmail.com', 'Feveran'),
('john@gmail.com', 'Gunaydin'),
('ali303036@gmail.com', 'halil ibrahim'),
('ali303036@gmail.com', 'Nasilsin askta'),
('ali303036@gmail.com', 'Goremedim sen gibi'),
('ali303036@gmail.com', 'bahsetmem lazim'),
('ali303036@gmail.com', 'derdim olsun'),
('ali303036@gmail.com', 'Ela');

-- --------------------------------------------------------

--
-- Table structure for table `playlists`
--

CREATE TABLE `playlists` (
  `listname` varchar(200) COLLATE utf8_turkish_ci NOT NULL,
  `userEmail` varchar(200) COLLATE utf8_turkish_ci NOT NULL,
  `songname` varchar(200) COLLATE utf8_turkish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Dumping data for table `playlists`
--

INSERT INTO `playlists` (`listname`, `userEmail`, `songname`) VALUES
('Night Mood', 'ali303036@gmail.com', 'Feveran'),
('Night Mood', 'ali303036@gmail.com', 'ask mi lazim'),
('Night Mood', 'ali303036@gmail.com', 'Kabahat Bende'),
('sad mood', 'abd303036@gmail.com', 'Feveran'),
('sad mood', 'abd303036@gmail.com', 'Ikinci Hal'),
('feride ', 'ali303036@gmail.com', 'intihask'),
('feride ', 'ali303036@gmail.com', 'Yok Yok'),
('feride ', 'ali303036@gmail.com', 'Kim'),
('kayed', 'ali303036@gmail.com', 'Feveran'),
('kayed', 'ali303036@gmail.com', 'Gunaydin'),
('haha', 'hamdan.awa.eng@gmail.com', 'Gunaydin'),
('haha', 'hamdan.awa.eng@gmail.com', 'Feveran'),
('Night Mood', 'john@gmail.com', 'Feveran'),
('Night Mood', 'john@gmail.com', 'Gunaydin'),
('today', 'ali1@gmail.com', 'ben seni cok sevdim'),
('today', 'ali1@gmail.com', 'Seni Seviyorum'),
('nighty', 'ali303036@gmail.com', 'Feveran'),
('bara', 'ali303036@gmail.com', 'Gunaydin'),
('bara', 'ali303036@gmail.com', 'Feveran');

-- --------------------------------------------------------

--
-- Table structure for table `singers`
--

CREATE TABLE `singers` (
  `singername` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `singercoverpic` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `singerprofilepic` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `about` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Dumping data for table `singers`
--

INSERT INTO `singers` (`singername`, `singercoverpic`, `singerprofilepic`, `about`) VALUES
('Ahmet Kaya', 'http://localhost/singerspics/ahmet_kaya\r\n_c.png', 'http://localhost/singerspics/ahmet_kaya\r\n_p.png', ''),
('Aleyna Tilki', 'http://localhost/singerspics/aleyna_tilki_c.png', 'http://localhost/singerspics/aleyna_tilki_p.png', ''),
('Bengü', 'http://localhost/singerspics/bengu_c.png', 'http://localhost/singerspics/bengu_p.png', 'Ben'),
('Bilal Sonses', 'http://localhost/singerspics/bilal_sonses_c.png', 'http://localhost/singerspics/bilal_sonses_p.png', ''),
('Buray', 'http://localhost/singerspics/buray_c.png', 'http://localhost/singerspics/buray_p.png', ''),
('Cem Adrian', 'http://localhost/singerspics/cem_adrian_c.png', 'http://localhost/singerspics/cem_adrian_p.png', ''),
('Eypio', 'http://localhost/singerspics/eypio_c.png', 'http://localhost/singerspics/eypio_p.png', ''),
('Feride Hilal Akın', 'http://localhost/singerspics/feride_hilal_akin_c.png', 'http://localhost/singerspics/feride_hilal_akin_p.png', 'feride'),
('Güliz Ayla', 'http://localhost/singerspics/guliz_ayla_c.png', 'http://localhost/singerspics/guliz_ayla_p.png', 'ayla'),
('Hadise', 'http://localhost/singerspics/hadise_c.png', 'http://localhost/singerspics/hadise_p.png', ''),
('İlyas Yalçıntaş', 'http://localhost/singerspics/ilyas_yalcintas_c.png', 'http://localhost/singerspics/ilyas_yalcintas_p.png', 'ilyas'),
('İrem Derici', 'http://localhost/singerspics/irem_derici_c.png', 'http://localhost/singerspics/irem_derici_p.png', 'irem'),
('Irmak Arıcı', 'http://localhost/singerspics/irmak_arici_c.png', 'http://localhost/singerspics/irmak_arici_p.png', 'irmak'),
('Koray Avcı', 'http://localhost/singerspics/koray_avci_c.png', 'http://localhost/singerspics/koray_avci_p.png', 'koray'),
('Mehmet Erdem', 'http://localhost/singerspics/mehmet_erdem_c.png', 'http://localhost/singerspics/mehmet_erdem_p.png', ''),
('Merve Özbey', 'http://localhost/singerspics/merve_ozbey_c.png', 'http://localhost/singerspics/merve_ozbey_p.png', 'merve'),
('Murat Boz', 'http://localhost/singerspics/murat_boz_c.png', 'http://localhost/singerspics/murat_boz_p.png', ''),
('Musa Eroğlu', 'http://localhost/singerspics/musa_eroglu_c.png', 'http://localhost/singerspics/musa_eroglu_p.png', 'musa'),
('Mustafa Ceceli', 'http://localhost/singerspics/mustafa_ceceli_c.png', 'http://localhost/singerspics/mustafa_ceceli_p.jpg', ''),
('Oğuzhan Koç', 'http://localhost/singerspics/oguzhan_c.png', 'http://localhost/singerspics/oguzhan_p.png', 'ozhan'),
('Reynmen', 'http://localhost/singerspics/reynmen_c.png', 'http://localhost/singerspics/reynmen_p.png', ''),
('Sancak', 'http://localhost/singerspics/sancak_c.png', 'http://localhost/singerspics/sancak_p.png', ''),
('Sezen Aksu', 'http://localhost/singerspics/sezen_aksu_c.png', 'http://localhost/singerspics/sezen_aksu_p.png', ''),
('Sila', 'http://localhost/singerspics/sila_c.png', 'http://localhost/singerspics/sila_p.png', ''),
('Simge', 'http://localhost/singerspics/simge_c.png', 'http://localhost/singerspics/simge_p.png', ''),
('Tarkan', 'http://localhost/singerspics/tarkan_c.png', 'http://localhost/singerspics/tarkan_p.png', ''),
('Toygar Işıklı', 'http://localhost/singerspics/toygar_isikli_c.png', 'http://localhost/singerspics/toygar_isikli_p.png', 'toygar'),
('Tuğçe Kandemir', 'http://localhost/singerspics/tugce_kandemir_c.png', 'http://localhost/singerspics/tugce_kandemir_p.png', 'kandemir'),
('Yıldız Tilbe', 'http://localhost/singerspics/yildiz_tilbe_c.png', 'http://localhost/singerspics/yildiz_tilbe_p.png', 'tilbe'),
('Zara', 'http://localhost/singerspics/zara_c.png', 'http://localhost/singerspics/zara_p.png', ''),
('Ziynet Sali', 'http://localhost/singerspics/ziynet_sali_c.png', 'http://localhost/singerspics/ziynet_sali_p.png', '');

-- --------------------------------------------------------

--
-- Table structure for table `songs`
--

CREATE TABLE `songs` (
  `singername` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `songname` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `songpic` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `songurl` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `liked` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Dumping data for table `songs`
--

INSERT INTO `songs` (`singername`, `songname`, `songpic`, `songurl`, `liked`) VALUES
('Ahmet Kaya', 'Adı Bahtiyar', 'https://sozlersokagi.com/wp-content/uploads/2019/02/Ahmet-Kaya-S%C3%B6zleri.jpg', 'http://localhost/ahmet_kaya_songs/Ahmet%20Kaya%20-%20Adi%20Bahtiyar.mp3', ''),
('Ahmet Kaya', 'Al Öfkemi', 'https://i.ytimg.com/vi/4b86VetfcdQ/hqdefault.jpg', 'http://localhost/ahmet_kaya_songs/Ahmet%20Kaya%20-%20Al%20%C3%96fkemi.mp3', ''),
('Ahmet Kaya', 'Nereden Bileceksiniz', 'http://1.bp.blogspot.com/-YSYXpYXSIGk/VXXpwmD46FI/AAAAAAAAA3c/lmYd_eW0BKk/s1600/Ahmet_Kaya_dinle.jpg', 'http://localhost/ahmet_kaya_songs/AHMET%20KAYA%20-%20NERDEN%20B%C4%B0LECEKS%C4%B0N%C4%B0Z.mp3', ''),
('Ahmet Kaya', 'Penceresiz Kaldım Anne', 'http://www.turku.com.tr/wp-content/uploads/2019/02/vui2odl_r5c.jpg', 'http://localhost/ahmet_kaya_songs/Ahmet%20KAYA%20-%20Penceresiz%20Kald%C4%B1m%20Anne.mp3', ''),
('Ahmet Kaya', 'Şafak Türküsü', 'https://www.esenshop.com/Uploads/UrunResimleri/Ahmet-Kaya---Safak-Turkusu-Plak-87aa.jpg', 'http://localhost/ahmet_kaya_songs/AHMET%20KAYA%20-%20%C5%9EAFAK%20T%C3%9CRK%C3%9CS%C3%9C.mp3', ''),
('Ahmet Kaya', 'Şiire Gazele', 'http://img.blogcu.com/uploads/canbaran_5.jpg', 'http://localhost/ahmet_kaya_songs/Ahmet%20Kaya%20-%20%C5%9Eiire%20Gazele.mp3', ''),
('Ahmet Kaya', 'Söyle', 'http://sarki.sozlerisarki.org/wp-content/uploads/2015/03/ahmet-kaya.jpg', 'http://localhost/ahmet_kaya_songs/AHMET%20KAYA%20-%20S%C3%96YLE.mp3', ''),
('Ahmet Kaya', 'Ağladıkça', 'https://www.agridahaber.com/images/haberler/2018/08/ahmet_kaya_agladikca_sarki_sozleri_h102859_92b6a.jpg', 'http://localhost/ahmet_kaya_songs/AHMET%20KAYA%20AGLADIKCA.mp3', ''),
('Ahmet Kaya', 'Hani Benim Gençliğim', 'https://m.media-amazon.com/images/I/81Zn5jWyfkL._SS500_.jpg', 'http://localhost/ahmet_kaya_songs/Ahmet%20Kaya-%20Hani%20Benim%20Gen%C3%A7ligim.mp3', ''),
('Ahmet Kaya', 'Kafama Sıkar Giderim', 'https://www.pirtukakurdi.com/image/cache/catalog/data/dr/Gece-Kitapligi/ahmet-kaya-kafama-sikar-giderim-116036-500x500.jpg', 'http://localhost/ahmet_kaya_songs/Ahmet%20Kaya%20Kafama%20S%C4%B1kar%20Giderim.mp3', ''),
('Aleyna Tilki', 'Nasilsin askta', 'http://www.magazinsortie.com/images/haberler/2019/05/aleynatilkinin-yaz-sarkisi-nasilsin-askta-yayinda_46e0d.jpg', 'http://localhost/aleyna_tilki_songs/Aleyna%20Tilki%20-%20Nas%C4%B1ls%C4%B1n%20A%C5%9Fkta.mp3', ''),
('Aleyna Tilki', 'Sen Olsan Bari', 'https://m.media-amazon.com/images/I/81QPhYDoeCL._SS500_.jpg', 'http://localhost/aleyna_tilki_songs/Aleyna%20Tilki%20-%20Sen%20Olsan%20Bari.mp3', ''),
('Aleyna Tilki', 'Cevapsiz cinlama', 'https://img.youtube.com/vi/YUB0Fsm1Ug8/mqdefault.jpg', 'http://localhost/aleyna_tilki_songs/Emrah%20Karaduman%20-%20Cevaps%C4%B1z%20%C3%87%C4%B1nlama%20ft.%20Aleyna%20Tilki.mp3', ''),
('Bengü', 'Feveran', 'http://4.bp.blogspot.com/-lwEIUYP6Ip8/Vgp4WIpTEpI/AAAAAAAADqM/hOXbQMDLo-4/s1600/Bengu%25CC%2588---Feveran-2015-Dinle-S%25CC%25A7ark%25C4%25B1s%25C4%25B1-So%25CC%2588zleri.jpg', 'http://localhost/bengu_songs/Beng%C3%BC%20-%20Feveran.mp3', ''),
('Bengü', 'Gunaydin', 'https://dl2.baritm-music.ir/dl/images/bengu-gunaydin.jpg', 'http://localhost/bengu_songs/Beng%C3%BC%20-%20G%C3%BCnayd%C4%B1n.mp3', ''),
('Bengü', 'Ikinci Hal', 'https://lone-reviewer.com/Wordpress3/wp-content/uploads/2016/05/bengunun-kinci-hali-6510605_41_o-2.jpg', 'http://localhost/bengu_songs/Beng%C3%BC%20-%20%C4%B0kinci%20Hal.mp3', ''),
('Bengü', 'Kapida Yalnizlik', 'https://iysr.tmgrup.com.tr/2015/12/01/659x460/1448898733192.jpg', 'http://localhost/bengu_songs/Beng%C3%BC%20-%20Kap%C4%B1da%20Yaln%C4%B1zl%C4%B1k.mp3', ''),
('Bengü', 'Kuzumu', 'https://m.media-amazon.com/images/I/81ZdNfQklwL._SS500_.jpg', 'localhost/bengu_songs/Bengü - Kuzum.mp3', ''),
('Bengü', 'Sahici', 'http://emperymusic.com/wp-content/uploads/2018/09/download-424.jpg', 'http://localhost/bengu_songs/Beng%C3%BC%20-%20Sahici.mp3', ''),
('Bengü', 'Saygimdan', 'https://i.ytimg.com/vi/4goQBlcdVUk/hqdefault.jpg', 'http://localhost/bengu_songs/Beng%C3%BC%20-%20Sayg%C4%B1mdan.mp3', ''),
('Bengü', 'sigamiyorum', 'https://www.haberler12.com/images/haberler/2016/07/bengu_sigamiyorum_sarki_sozleri_2016_h1340_a4fa0.jpg', 'http://localhost/bengu_songs/Beng%C3%BC%20-%20S%C4%B1%C4%9Fam%C4%B1yorum.mp3', ''),
('Bengü', 'Yarali', 'https://www.konserturkiye.net/sites/default/files/photo_90_0.jpg', 'http://localhost/bengu_songs/Beng%C3%BC%20-%20Yaral%C4%B1.mp3', ''),
('Bengü', 'yazik', 'https://m.media-amazon.com/images/I/71-1ciwQvzL._SS500_.jpg', 'http://localhost/bengu_songs/Beng%C3%BC%20-%20Yaz%C4%B1k.mp3', ''),
('Bilal Sonses', 'Goremedim sen gibi', 'https://mp3semticdn.com/mp3_images/Bilal-Sonses-Neyim-Olacaktin-2019-59.jpg', 'http://localhost/bilal_sonses_songs/Bilal%20SONSES%20-%20G%C3%B6rmedim%20Sen%20Gibi%20(Official%20Video).mp3', ''),
('Bilal Sonses', 'Helal Etmiyorum', 'https://2.bp.blogspot.com/-V8_4yY6Douw/V5cmNi0ytgI/AAAAAAAAADo/rm68Js49VbUJBI_3KgkUvlVRiOyV3AYrACLcB/s1600/Bilal%2BSonses.jpg', 'http://localhost/bilal_sonses_songs/Bilal%20SONSES%20-%20Helal%20Etmiyorum%20(Ayaz%20Cover).mp3', ''),
('Bilal Sonses', 'icemdeki sen', 'https://www.magazinn.com/wp-content/uploads/2018/12/icimdeki-sen.jpg', 'http://localhost/bilal_sonses_songs/Bilal%20SONSES%20-%20%C4%B0%C3%A7imdeki%20Sen%20(Canl%C4%B1).mp3', ''),
('Bilal Sonses', ' İki Kelime', 'https://cdn101.adwimg.com/u/180809/forums/TzTcEhOlAtzMuu36sjbzKzyljTHp2Wk4.jpg', 'http://localhost/bilal_sonses_songs/Bilal%20SONSES%20-%20%C4%B0ki%20Kelime.mp3', ''),
('Bilal Sonses', 'ikimizde bilemedik', 'https://www.magazinn.com/wp-content/uploads/2019/03/bilal-sonses-%C4%B0kimiz-de-Bilemedik.jpg', 'http://localhost/bilal_sonses_songs/Bilal%20SONSES%20-%20%C4%B0kimiz%20de%20Bilemedik.mp3', ''),
('Bilal Sonses', ' İçimdeki Sen', 'https://4.bp.blogspot.com/-qaxh1fnJrAA/XB5Mfv0XcFI/AAAAAAAAF4E/0mQlZquq3dgU7pALIe_hMq3jHqtImkncwCLcBGAs/s1600/bilal.jpg', 'http://localhost/Bilal_sonses_songs/Bilal%20SONSES%20-%20%C4%B0%C3%A7imdeki%20Sen%20(Canl%C4%B1).mp3', ''),
('Buray', 'ask mi lazim', 'http://www.magazinsortie.com/images/haberler/buray_ask_mi_lazim_ile_5_haftadir_zirevede_h8528.jpg', 'http://localhost/Buray_songs/BURAY%20-%20A%C5%9Fk%20M%C4%B1%20Laz%C4%B1m%20(LYRICS).mp3', ''),
('Bilal Sonses', 'neyim olacaktin', 'https://www.ensozler.net/uploads/blog/2019/10/bilal-sonses.jpg', 'http://localhost/Bilal_sonses_songs/Bilal%20SONSES%20-%20Neyim%20Olacakt%C4%B1n%20(Official%20Video).mp3', ''),
('Bilal Sonses', 'Opesim Var', 'https://www.music-bazaar.com/album-images/vol32/1602/1602274/3476225-big/Akustik-Kayitlar-Single-cover.jpg', 'http://localhost/Bilal_sonses_songs/Bilal%20SONSES%20-%20Opesim%20Var%20(Video%20Klip).mp3', ''),
('Bilal Sonses', 'Sevme', 'https://m.media-amazon.com/images/I/71xt0VK1HYL._SS500_.jpg', 'http://localhost/Bilal_sonses_songs/Bilal%20SONSES%20-%20Sevme.mp3', ''),
('Bilal Sonses', 'Yak', 'https://m.media-amazon.com/images/I/61GaagW1ueL._SS500_.jpg', 'http://localhost/Bilal_sonses_songs/Bilal%20SONSES%20-%20Yak%20(Official%20Video).mp3', ''),
('Buray', 'ay parcasi', 'https://www.biletix.com/static/images/live/event/eventimages/buraypera_2017.jpg', 'http://localhost/Buray_songs/Buray%20-%20Ay%20parcasi.mp3', ''),
('Buray', 'durduramadim gitti yarim', 'https://sozlersokagi.com/wp-content/uploads/2019/02/buray-1.jpg', 'http://localhost/Buray_songs/Buray%20-%20Durduramad%C4%B1m%20Gitti%20Yar%C4%B1m.mp3', ''),
('Buray', 'istersen', 'https://music.musicdb.me/a02391b5-1f1f-4735-bb67-3d2e49cda2ea.jpg', 'http://localhost/Buray_songs/Buray%20-%20%C4%B0stersen%20(Official%20Music%20Video).mp3', ''),
('Buray', 'Kabahat Bende', 'https://img-s1.onedio.com/id-5bd2f4e59265877c20e20984/rev-0/w-635/listing/f-jpg-webp/s-7edfc200b303a3cceb3af6da2a8da8329869f71f.webp', 'http://localhost/Buray_songs/Buray%20-%20Kabahat%20Bende.mp3', ''),
('Buray', 'kimsinin sucu yok', 'https://www.gazetemag.com/wp-content/uploads/2016/05/gazetemag.com-buray.jpg', 'http://localhost/Buray_songs/Buray%20-%20Kimsenin%20Su%C3%A7u%20Yok.mp3', ''),
('Buray', 'Mecnun', 'https://www.gazetemag.com/wp-content/uploads/2017/06/buray.jpg', 'http://localhost/Buray_songs/Buray%20-%20Mecnun.mp3', ''),
('Buray', ' Sen Sevda Mısın', 'https://www.music-bazaar.com/album-images/vol26/980/980245/2843668-big/Sen-Sevda-Misin-2015-Single-cover.jpg', 'http://localhost/Buray_songs/Buray%20-%20Sen%20Sevda%20M%C4%B1s%C4%B1n%20(Official%20Music%20Video).mp3', ''),
('Buray', 'seni sevmiyorum artik', 'https://aduket.net/wp-content/uploads/seni-sevmiyorum-artik-buray-2017-yeni-klip-dinle-indir.jpg', 'http://localhost/Buray_songs/Buray%20-%20Seni%20Sevmiyorum%20Art%C4%B1k%20(Official%20Music%20Video).mp3', ''),
('Buray', 'Tac Mahal', 'http://www.tekmagazin.com/wp-content/uploads/2019/03/1553494930__dsc6318_.jpg', 'http://localhost/Buray_songs/Buray%20-%20Tac%20Mahal.mp3', ''),
('Buray', 'Sevdalar Sevdalar', 'http://www.easmurat.com/images/2019/01/buray.jpg', 'http://localhost/Buray_songs/Buray%20Sevdalar%20Sevdalar.mp3', ''),
('Cem Adrian', 'ben seni cok sevdim', 'https://gercekfethiye.com/img/w730-h411-c730x411-q90/dosya/haber/haber-1341017760.webp', 'http://localhost/cem_adrian_songs/Cem%20Adrian%20-%20Ben%20Seni%20%C3%87ok%20Sevdim%20(Official%20Audio).mp3', ''),
('Cem Adrian', ' Ela Gözlüm', 'https://m.media-amazon.com/images/I/81VB8QyOB4L._SS500_.jpg', 'http://localhost/cem_adrian_songs/Cem%20Adrian%20-%20Ela%20G%C3%B6zl%C3%BCm%20(Official%20Audio).mp3', ''),
('Cem Adrian', 'Elveda', 'https://m.media-amazon.com/images/I/81iTyPoMYEL._SS500_.jpg', 'http://localhost/cem_adrian_songs/Cem%20Adrian%20-%20Elveda%20(Official%20Audio).mp3', ''),
('Cem Adrian', 'mutlu yillar', 'https://haberport.com/images/haberler/2019/07/cem-adriandan-saglik-durumu-ile-ilgili-paylasim-hayranlarini-sevindirdi.jpg', 'http://localhost/cem_adrian_songs/Cem%20Adrian%20-%20Mutlu%20Y%C4%B1llar.mp3', ''),
('Cem Adrian', 'sari gelin', 'http://www.ucretsizmp3yukle.com/wp-content/uploads/2018/05/Cem-Adrian-Sar%C4%B1-Gelin-Mp3-%C4%B0ndir-768x432.jpg', 'http://localhost/cem_adrian_songs/Cem%20Adrian%20-%20Sar%C4%B1%20Gelin%20(Live).mp3', ''),
('Cem Adrian', ' Sen Gel Diyorsun', 'http://4.bp.blogspot.com/-kpdh9_NeB0I/Vp_cdJjKDgI/AAAAAAAADdo/1rhe8lYb_kY/s1600/Cem%2BAdrian%2BSen%2BGel%2BDiyorsun%2B%2528%25C3%2596f%2B%25C3%2596f%2529.png', 'http://localhost/cem_adrian_songs/Cem%20Adrian%20-%20Sen%20Gel%20Diyorsun%20(%C3%96f%20%C3%96f).mp3', ''),
('Cem Adrian', 'Seni Seviyorum', 'https://1.bp.blogspot.com/-8htqItzWuKM/WKSR4gpUA4I/AAAAAAAADuI/QNmNlgs1mio4dIoUlnsW4YLrscOKGHaaQCLcB/s1600/cem.jpg', 'http://localhost/cem_adrian_songs/Cem%20Adrian%20-%20Seni%20Seviyorum.mp3', ''),
('Cem Adrian', 'Herkes Gider Mi', 'http://2.bp.blogspot.com/-24AJlGvabB0/VnWjgak7t1I/AAAAAAAAQZI/m8PoSjD9_tY/s1600/cem-adrian-sarki-sozleri.jpg', 'http://localhost/cem_adrian_songs/Cem%20Adrian%20&%20Aylin%20Asl%C4%B1m%20-%20Herkes%20Gider%20Mi.mp3', ''),
('Cem Adrian', 'Olsun', 'https://3.bp.blogspot.com/-JbmieQ_ftbw/VzNZ0PDlBgI/AAAAAAAACco/H4Y2KT2ZKkIrQP1LoTYMLuCNcG6wKX_mgCLcB/s1600/cem-adrian-6.jpg', 'http://localhost/cem_adrian_songs/Cem%20Adrian%20&%20Halil%20Sezai%20-%20Olsun.mp3', ''),
('Cem Adrian', ' Sen Benim Sarkılarımsın', 'https://m.media-amazon.com/images/I/71GQfQLyknL._SS500_.jpg', 'http://localhost/cem_adrian_songs/Cem%20Adrian%20&%20Hande%20Mehan%20-%20Sen%20Benim%20Sark%C4%B1lar%C4%B1ms%C4%B1n%20(Official%20Audio).mp3', ''),
('Eypio', 'maykil', 'https://direct.rhapsody.com/imageserver/images/alb.286490719/500x500.jpg', 'http://localhost/eypio_songs/Eypio%20-%20Mayk%C4%B1l%20(Official%20Audio).mp3', ''),
('Eypio', 'ayni nakarat', 'https://4.bp.blogspot.com/-7r7e4EfsIHk/W4C22ensRfI/AAAAAAAAAds/cpUH3fsA4-Ivc6cbDznaGeJHGl-cV_6tACK4BGAYYCw/s1600/eypio-ayni%2Bnakarat%2B%2528400%2Bx%2B257%2529.jpg', 'http://localhost/eypio_songs/Eypio%20-%20Ayn%C4%B1%20Nakarat.mp3', ''),
('Eypio', 'gomun beni cukura', 'http://www.zamonaviy.uz/_bl/1/37822907.jpg', 'http://localhost/eypio_songs/Eypio%20-%20G%C3%B6m%C3%BCn%20Beni%20%C3%87ukura%20(%C3%87ukur%20Dizi%20M%C3%BCzi%C4%9Fi)%20(Official%20Music%20Video).mp3', ''),
('Eypio', 'kasik', 'https://pbs.twimg.com/media/DtuBiz0WkAAfqU5.jpg', 'http://localhost/eypio_songs/Eypio%20-%20Ka%C5%9F%C4%B1k%20(Kafalar%20Kar%C4%B1%C5%9F%C4%B1k%20Film%20M%C3%BCzi%C4%9Fi).mp3', ''),
('Eypio', ' Kral Çıplak', 'https://pbs.twimg.com/media/B0f1wyzCMAALED0.jpg', 'http://localhost/eypio_songs/Eypio%20-%20Kral%20%C3%87%C4%B1plak.mp3', ''),
('Eypio', 'ay kizim', 'https://sanatkaravani.com/wp-content/uploads/2016/05/Turk-Populer-Kulturunun-Asi-Cocugu-Rap-Muzik-8.jpg', 'http://localhost/eypio_songs/Eypio%20-%20Ay%20K%C4%B1z%C4%B1m.mp3', ''),
('Eypio', 'Naim', 'https://www.temizmagazin.com/sites/default/files/inline/images/1564053361_eypi_o_nai_m_2.jpg', 'http://localhost/eypio_songs/Eypio%20-%20Naim.mp3', ''),
('Eypio', ' Umudum Kalmadı', 'https://m.media-amazon.com/images/I/71BMnGQUTnL._SS500_.jpg', 'http://localhost/eypio_songs/Eypio%20-%20Umudum%20Kalmad%C4%B1.mp3', ''),
('Eypio', 'Vur Vur', 'https://image.winudf.com/v2/image1/Y29tLm5pZ2h0YXBwcy52dXJ2dXJfc2NyZWVuXzFfMTU1NjQ2MDUwMV8wMzU/screen-1.jpg?fakeurl=1&type=.jpg', 'http://localhost/eypio_songs/Eypio%20-%20Vur%20Vur.mp3', ''),
('Eypio', 'yoksun basimda', 'https://i.ytimg.com/vi/MWjFgQiPYTM/maxresdefault.jpg', 'http://localhost/eypio_songs/Eypio-Yoksun%20Ba%C5%9F%C4%B1mda.mp3', ''),
('Feride Hilal Akın', 'intihask', 'https://img.youtube.com/vi/ODoRKm2gJEU/hqdefault.jpg', 'http://localhost/feride_hilal_akin_songs/Feride%20Hilal%20Ak%C4%B1n%20-%20%C4%B0ntiha%C5%9Fk.mp3', ''),
('Feride Hilal Akın', 'Kim', 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/07/09/090720191058346255756_2.jpg', 'http://localhost/feride_hilal_akin_songs/Feride%20Hilal%20Ak%C4%B1n%20-%20Kim.mp3', ''),
('Feride Hilal Akın', 'Yok Yok', 'https://im.haberturk.com/2019/06/03/ver1559573455/2483566_810x458.jpg', 'http://localhost/feride_hilal_akin_songs/Feride%20Hilal%20Ak%C4%B1n%20-%20Yok%20Yok.mp3', ''),
('Feride Hilal Akın', 'cok canlar yanacak', 'http://muzikonair.com/wp-content/uploads/2018/03/feride-hilal-akin.jpg', 'http://localhost/feride_hilal_akin_songs/Feride%20Hilal%20Ak%C4%B1n%20(JingleTV)%20-%20%C3%87ok%20Canlar%20Yanacak%20(Yeni%20Gelin%20Jenerik%20M%C3%BCzi%C4%9Fi).mp3', ''),
('Feride Hilal Akın', 'Bilir mi', 'https://cdn101.adwimg.com/u/170827/forums/YT7ZjZSq75w3cml4BjviWZrylEXOA7PW.jpg', 'http://localhost/feride_hilal_akin_songs/Feride%20Hilal%20Ak%C4%B1n%20feat.%20Enbe%20Orkestras%C4%B1%20-%20Bilir%20mi.mp3', ''),
('Güliz Ayla', 'bahsetmem lazim', 'http://4.bp.blogspot.com/-QioO83SvBuQ/V18ddYbBkTI/AAAAAAAABIU/Ht8Ys0BX6IYBXkUGDJNXy9BhvAjjBTcqwCK4B/s1600/guliz-ayla-bahsetmem-lazim-sozleri-753010.jpg', 'http://localhost/guliz_ayla_songs/G%C3%BCliz%20Ayla%20-%20Bahsetmem%20Laz%C4%B1m.mp3', ''),
('Güliz Ayla', 'bazi', 'https://www.adwhit.com/uploads/forums/170822/8954ba7224c2ff37e2c141dd9f938b7f.jpg', 'http://localhost/guliz_ayla_songs/G%C3%BCliz%20Ayla%20-%20Baz%C4%B1%20(Official%20Audio).mp3', ''),
('Güliz Ayla', 'Benim Olmazsan', 'https://i.sozcu.com.tr/wp-content/uploads/2019/04/15/iecrop/5a58c138ae78490a5ce61b87_16_9_1555317874-880x495.jpg', 'http://localhost/guliz_ayla_songs/G%C3%BCliz%20Ayla%20-%20Benim%20Olmazsan%20(Official%20Audio).mp3', ''),
('Güliz Ayla', 'bilirkisi', 'http://i.milliyet.com.tr//OnedioGallery/Detail/2017/11/24/5806yApj43uh5_1.jpg', 'http://localhost/guliz_ayla_songs/G%C3%BCliz%20Ayla%20-%20Bilirki%C5%9Fi.mp3', ''),
('Güliz Ayla', 'gelsin opsun kalbimi', 'http://muzikonair.com/wp-content/uploads/2017/11/guliz-ayla-muzikonair.jpg', 'http://localhost/guliz_ayla_songs/G%C3%BCliz%20Ayla%20-%20Gelsin%20%C3%96ps%C3%BCn%20Kalbimi.mp3', ''),
('Güliz Ayla', 'Olmazsan Olmaz', 'https://1.bp.blogspot.com/-y6Yi1PKBdo4/Vz5ssdLGVUI/AAAAAAAAAeo/7MNAZgCjtso6dPjaVawzCJtC2VkFi5l6ACLcB/s1600/11998930_869561336497216_6753676636147718786_n.jpg', 'http://localhost/guliz_ayla_songs/G%C3%BCliz%20Ayla%20-%20Olmazsan%20Olmaz.mp3', ''),
('Güliz Ayla', 'oyle sev', 'http://i.milliyet.com.tr/MolatikDetayBig/2019/06/19/fft371_mf32886630.Jpeg', 'http://localhost/guliz_ayla_songs/G%C3%BCliz%20Ayla%20-%20%C3%96yle%20Sev.mp3', ''),
('Güliz Ayla', 'Sevgilim', 'https://i2.milimaj.com/i/milliyet/75/0x410/5c8d6ea245d2a09e0097f904.jpg', 'http://localhost/guliz_ayla_songs/G%C3%BCliz%20Ayla%20-%20Sevgilim.mp3', ''),
('Güliz Ayla', 'varsayalim', 'https://icdn.netgazete.com/images/bilgilendirme/2015_10/buyuk/herkes-google-da-guliz-ayla-ismini-ve-olmazsan-olmaz-sarkisini-ariyor-guliz-ayla-1445848269.jpg', 'http://localhost/guliz_ayla_songs/G%C3%BCliz%20Ayla%20-%20Varsayal%C4%B1m%20(Official%20Audio).mp3', ''),
('Güliz Ayla', 'Yetmedi Mi', 'https://mp3lerindir.site/resimler/2018/7/guliz-ayla-qIBXGTU7gR-0.jpg', 'http://localhost/guliz_ayla_songs/G%C3%BCliz%20Ayla%20-%20Yetmedi%20Mi.mp3', ''),
('Hadise', 'ask dedign', 'http://i.milliyet.com.tr/MolatikGaleri/2019/04/26/fft373_mf32772090.Jpeg', 'http://localhost/hadise_songs/Hadise%20-%20A%C5%9Fk%20Dedi%C4%9Fin.mp3', ''),
('Hadise', ' Düm Tek Tek', 'http://i.milliyet.com.tr/MolatikGaleri/2019/04/26/fft373_mf32772090.Jpeg', 'http://localhost/hadise_songs/Hadise%20-%20D%C3%BCm%20Tek%20Tek%20(D%C3%BCm%20Tek%20Tek).mp3', ''),
('Hadise', ' Farkımız Var', 'http://i.milliyet.com.tr/MolatikGaleri/2019/04/26/fft373_mf32772090.Jpeg', 'http://localhost/hadise_songs/Hadise%20-%20Fark%C4%B1m%C4%B1z%20Var.mp3', ''),
('Hadise', 'geliyorum yanina', 'http://i.milliyet.com.tr/MolatikGaleri/2019/04/26/fft373_mf32772090.Jpeg', 'http://localhost/hadise_songs/Hadise%20-%20Geliyorum%20Yan%C4%B1na.mp3', ''),
('Hadise', 'Kahraman', 'http://i.milliyet.com.tr/MolatikGaleri/2019/04/26/fft373_mf32772090.Jpeg', 'http://localhost/hadise_songs/Hadise%20-%20Kahraman.mp3', ''),
('Hadise', 'mesajimi almistir o', 'http://i.milliyet.com.tr/MolatikGaleri/2019/04/26/fft373_mf32772090.Jpeg', 'http://localhost/hadise_songs/Hadise%20-%20Mesaj%C4%B1m%C4%B1%20Alm%C4%B1%C5%9Ft%C4%B1r%20O.mp3', ''),
('Hadise', ' Prenses', 'http://i.milliyet.com.tr/MolatikGaleri/2019/04/26/fft373_mf32772090.Jpeg', 'http://localhost/hadise_songs/Hadise%20-%20Prenses.mp3', ''),
('Hadise', 'sampiyon', 'http://i.milliyet.com.tr/MolatikGaleri/2019/04/26/fft373_mf32772090.Jpeg', 'http://localhost/hadise_songs/Hadise%20-%20%C5%9Eampiyon.mp3', ''),
('Hadise', ' Sıfır Tolerans', 'http://i.milliyet.com.tr/MolatikGaleri/2019/04/26/fft373_mf32772090.Jpeg', 'http://localhost/hadise_songs/Hadise%20-%20S%C4%B1f%C4%B1r%20Tolerans.mp3', ''),
('Irmak Arıcı', 'yaz gunu', 'http://i.milliyet.com.tr/MolatikGaleri/2019/04/26/fft373_mf32772090.Jpeg', 'http://localhost/hadise_songs/Hadise%20-%20Yaz%20G%C3%BCn%C3%BC.mp3', ''),
('Irmak Arıcı', 'gece gibi gonlum', 'https://www.burhanakdag.com/wp-content/uploads/2019/04/tbvv0o0alqa_2_1200x720.jpg', 'http://localhost/irmak_arici_songs/Irmak%20Ar%C4%B1c%C4%B1%20-%20Gece%20Gibi%20G%C3%B6nl%C3%BCn.mp3', ''),
('Irmak Arıcı', 'Mevzum Derin', 'https://i4.hurimg.com/i/hurriyet/75/750x422/5dce84687af507266c64bb3b.jpg', 'http://localhost/irmak_arici_songs/Irmak%20Ar%C4%B1c%C4%B1%20-%20Mevzum%20Derin.mp3', ''),
('Irmak Arıcı', 'olmaz olmaz bu is olmaz', 'https://www.kimnereli.net/wp-content/uploads/2019/04/irmak-arici-1-310x250.jpg', 'http://localhost/irmak_arici_songs/Irmak%20Ar%C4%B1c%C4%B1%20-%20Olmaz%20Olmaz%20Bu%20%C4%B0%C5%9F%20Olamaz.mp3', ''),
('Koray Avcı', 'adalitin bu mu dunya', 'https://img-s1.onedio.com/id-5bdb153cc143091d0f5bac56/rev-0/w-635/listing/f-jpg-webp/s-2e403925da05fe4a77000982629a1fff33edc241.webp', 'http://localhost/koray_avci_songs/Koray%20Avc%C4%B1%20-%20Adaletin%20Bu%20Mu%20D%C3%BCnya%20(Official%20Video).mp3', ''),
('Koray Avcı', 'aglama yar', 'https://i4.hurimg.com/i/hurriyet/75/750x422/5aeb23300f25431bec272d29.jpg', 'http://localhost/koray_avci_songs/Koray%20Avc%C4%B1%20-%20A%C4%9Flama%20Yar%20(Lyric%20Video).mp3', ''),
('Koray Avcı', 'ask sana benzer', 'https://i2.milimaj.com/i/milliyet/75/0x410/5cd2a06aec10bb43b4f7850f.jpg', 'http://localhost/koray_avci_songs/Koray%20Avc%C4%B1%20-%20A%C5%9Fk%20Sana%20Benzer%20(Official%20Video).mp3', ''),
('Koray Avcı', ' Gittin Gideli', 'https://i.sozcu.com.tr/wp-content/uploads/2019/05/07/iecrop/koray-avci-sli_16_9_1557215892.jpg', 'http://localhost/koray_avci_songs/Koray%20Avc%C4%B1%20-%20Gittin%20Gideli%20(Akustik)%20(Official%20Audio).mp3', ''),
('Koray Avcı', 'hosgeldin', 'https://www.biletix.com/static/images/live/event/eventimages/koray-avci-uzunsac.png', 'http://localhost/koray_avci_songs/Koray%20Avc%C4%B1%20-%20Ho%C5%9F%20Geldin%20(Official%20Video).mp3', ''),
('Koray Avcı', 'Sen', 'https://cdn101.adwimg.com/u/180113/forums/BD8q8kv9oQajQKr0XtsS3KinF4rSH1G2.jpg', 'http://localhost/koray_avci_songs/Koray%20Avc%C4%B1%20-%20Sen%20(Official%20Video).mp3', ''),
('Koray Avcı', ' Unutamam Seni', 'https://www.haber16.com/images/haberler/2019/05/koray-avci-ekmeginle-oynarim-iddialarina-cevap-verdi.jpg', 'localhost/koray_avci_songs/Koray Avcı - Unutamam Seni (Official Video).mp3', ''),
('Koray Avcı', 'yanimda sen olmayinca', 'https://cdn101.adwimg.com/u/180113/forums/BD8q8kv9oQajQKr0XtsS3KinF4rSH1G2.jpg', 'http://localhost/koray_avci_songs/Koray%20Avc%C4%B1%20-%20Yan%C4%B1mda%20Sen%20Olmay%C4%B1nca%20(Official%20Video).mp3', ''),
('Koray Avcı', 'yine aylardan kasim', 'https://icdn.turkiyegazetesi.com.tr/images/haberler/2016_12/buyuk/koray-avci-dan-sevenlerine-mujde-yeniden-sokaga-cikiyorum-1481345926.jpg', 'http://localhost/koray_avci_songs/Koray%20Avc%C4%B1%20-%20Yine%20Aylardan%20Kas%C4%B1m%20(Official%20Video).mp3', ''),
('Mehmet Erdem', 'aciyi sevmek olurmu', 'https://i.sozcu.com.tr/wp-content/uploads/2018/03/iecrop/mehmeterdem-bulten_16_9_1521210203.jpg', 'http://localhost/mehmet_erdem_songs/Mehmet%20Erdem%20-%20Ac%C4%B1y%C4%B1%20Sevmek%20Olur%20mu%20(Official%20Music%20Video).mp3', ''),
('Mehmet Erdem', 'askimiz bitecek', 'https://img.gecce.com/2014/09/24/mehmet-erdem-170512UL.jpg', 'http://localhost/mehmet_erdem_songs/Mehmet%20Erdem%20-%20A%C5%9Fk%C4%B1m%C4%B1z%20Bitecek%20(Official%20Music%20Video).mp3', ''),
('Mehmet Erdem', 'Hakim Bey', 'https://image.radyo7.com/newsite/large/2017/52/ec60b0535c860d90276c1ddf7419daf3b98e7af2.jpg', 'http://localhost/mehmet_erdem_songs/Mehmet%20Erdem%20-%20Hakim%20Bey%20(Official%20Music%20Video).mp3', ''),
('Mehmet Erdem', 'hepsi benim yuzumden', 'https://www.adwhit.com/uploads/forums/170320/56790078a60a150842e9ed8828240c6e.jpg', 'http://localhost/mehmet_erdem_songs/Mehmet%20Erdem%20-%20Hepsi%20Benim%20Y%C3%BCz%C3%BCmden.mp3', ''),
('Mehmet Erdem', 'herkes ayni hayatta', 'https://www.amirfun.ir/wp-content/uploads/Mehmet-Erdem-Olur-O-Zaman.jpg', 'http://localhost/mehmet_erdem_songs/Mehmet%20Erdem%20-%20Herkes%20Ayn%C4%B1%20Hayatta%20(Official%20Music%20Video).mp3', ''),
('Mehmet Erdem', 'kadinim', 'https://music.musicdb.me/97021b2a-780b-45ae-8e54-1869e15797c1.jpg', 'http://localhost/mehmet_erdem_songs/Mehmet%20Erdem%20-%20Kad%C4%B1n%C4%B1m.mp3', ''),
('Mehmet Erdem', 'Olur O Zaman', 'https://www.temizmagazin.com/sites/default/files/xdrtgtyuj.jpg', 'http://localhost/mehmet_erdem_songs/Mehmet%20Erdem%20-%20Olur%20O%20Zaman%20(Official%20Music%20Video).mp3', ''),
('Mehmet Erdem', 'sari', 'http://esyenigun.com/resimler/m/mehmet-erdem-konser-verecek.jpg', 'http://localhost/mehmet_erdem_songs/Mehmet%20Erdem%20-%20Sar%C4%B1%20%C3%87izmeli%20Mehmet%20A%C4%9Fa%20(Official%20Music%20Video).mp3', ''),
('Mehmet Erdem', 'sen de vur gulum', 'https://www.biletix.com/static/images/live/event/eventimages/Y4V22.gif', 'http://localhost/mehmet_erdem_songs/Mehmet%20Erdem%20-%20Sen%20De%20Vur%20G%C3%BCl%C3%BCm.mp3', ''),
('Mehmet Erdem', 'Sensiz Ben Olamam', 'https://static.daktilo.com/sites/77/uploads/2019/05/19/mehmet-erdem-hepsi-benim-y-z-mden-1558249365.jpg', 'http://localhost/mehmet_erdem_songs/Mehmet%20Erdem%20-%20Sensiz%20Ben%20Olamam.mp3', ''),
('Merve Özbey', 'kul', 'https://cdn101.adwimg.com/u/180630/forums/8YGwz2mVYOzRXXqejuyEcZCPMiGzTtEo.jpg', 'http://localhost/merve_ozbey_songs/K%C3%BCl.mp3', ''),
('Merve Özbey', 'hani bizim sevdamiz', 'http://i.milliyet.com.tr/MolatikDetayBig/2018/07/11/fft371_mf30046181.Jpeg', 'http://localhost/merve_ozbey_songs/Merve%20%C3%96zbey%20-%20Hani%20B%C4%B0zim%20Sevdam%C4%B1z%20-%20(Official%20Video).mp3', ''),
('Merve Özbey', 'odestik', 'https://i.sozcu.com.tr/wp-content/uploads/2018/07/iecrop/df_16_9_1532501132.jpg', 'http://localhost/merve_ozbey_songs/MERVE%20%C3%96ZBEY%20-%20%C3%96DE%C5%9ET%C4%B0K%20(%20Official%20Audio%20).mp3', ''),
('Merve Özbey', 'Tebrikler', 'https://televizyongazetesi.com/wp-content/uploads/fly-images/70229/merveozbey1-750x375-c.jpg', 'http://localhost/merve_ozbey_songs/Merve%20%C3%96zbey%20-%20Tebrikler.mp3', ''),
('Merve Özbey', 'vicdanın affetsin', 'https://i4.hurimg.com/i/hurriyet/75/750x422/5622222dc03c0e30a06d33a6.jpg', 'http://localhost/merve_ozbey_songs/MERVE%20%C3%96ZBEY%20-%20V%C4%B0CDANIN%20AFFETS%C4%B0N%20(Official%20Video).mp3', ''),
('Merve Özbey', ' Vuracak', 'http://i.milliyet.com.tr/MolatikDetayBig/2019/05/30/fft371_mf32848208.Jpeg', 'http://localhost/merve_ozbey_songs/Merve%20%C3%96zbey%20-%20Vuracak.mp3', ''),
('Merve Özbey', 'yaramizda kalsin', 'https://icdn.turkiyegazetesi.com.tr/images/haberler/2019_04/buyuk/bostanci-ya-merve-ozbey-damgasi-1555944214.jpg', 'http://localhost/merve_ozbey_songs/Merve%20%C3%96zbey%20-%20Yaram%C4%B1zda%20Kals%C4%B1n.mp3', ''),
('Murat Boz', 'adini bilen yazsin', 'https://i.internethaber.com/files/2017/1/28/1750237/murat-bozun-annesi-hastaneye-kaldirildi-7eYCru.jpg', 'http://localhost/murat_boz_songs/Murat%20Boz%20-%20Ad%C4%B1n%C4%B1%20Bilen%20Yazs%C4%B1n.mp3', ''),
('Murat Boz', 'ask bu', 'https://cdn.radyofenomen.com/fenomenturk/u/img/c/m/u/muratboz-1506342607.jpg', 'http://localhost/murat_boz_songs/Murat%20Boz%20-%20A%C5%9Fk%20Bu.mp3', ''),
('Murat Boz', 'gec olmadan', 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2019/09/16/160920191737219966265_2.jpg', 'http://localhost/murat_boz_songs/Murat%20Boz%20-%20Ge%C3%A7%20Olmadan.mp3', ''),
('Murat Boz', 'Janti', 'https://i4.hurimg.com/i/hurriyet/75/750x422/56fcf347c03c0e3130528345.jpg', 'http://localhost/murat_boz_songs/Murat%20Boz%20-%20Janti.mp3', ''),
('Murat Boz', 'ozledim', 'https://cdntr1.img.sputniknews.com/images/103755/03/1037550370.jpg', 'http://localhost/murat_boz_songs/Murat%20Boz%20-%20%C3%96zledim%20(Official%20Video).mp3', ''),
('Murat Boz', 'vazgecemem', 'https://www.turkiyekulisi.com/images/resize/100/656x400/haberler/2019/07/murat-boz-dan-bahsis-aciklamasi_63cbf.jpg', 'http://localhost/murat_boz_songs/Murat%20Boz%20-%20Vazge%C3%A7mem.mp3', ''),
('Murat Boz', 'yana done', 'https://i4.hurimg.com/i/hurriyet/75/750x422/56fcf347c03c0e3130528345.jpg', 'http://localhost/murat_boz_songs/Murat%20Boz%20-%20Yana%20D%C3%B6ne.mp3', ''),
('Musa Eroğlu', 'halil ibrahim', 'https://media-cdn.t24.com.tr/media/library/2019/10/1572245396427-4325345.jpg', 'http://localhost/musa_eroglu_songs/Musa%20Ero%C4%9Flu%20-%20Halil%20%C4%B0brahim.mp3', ''),
('Musa Eroğlu', 'mihriban', 'https://iasbh.tmgrup.com.tr/e66a30/752/395/0/6/1151/611?u=https://isbh.tmgrup.com.tr/sbh/2018/11/07/musa-erogludan-yeni-album-1541575210469.jpg', 'http://localhost/musa_eroglu_songs/MUSA%20ERO%C4%9ELU%20-%20M%C4%B0HR%C4%B0BAN.mp3', ''),
('Musa Eroğlu', 'Telli Turnam', 'https://www.artukluhaber.net/resimler/adsiz_933f0a26f2e34de47e87.jpg', 'http://localhost/musa_eroglu_songs/Musa%20Ero%C4%9Flu%20-%20Telli%20Turnam.mp3', ''),
('Musa Eroğlu', 'turnalarin gocu', 'https://img.haberler.com/haber/497/musa-eroglu-nun-susuz-koyu-icini-sizlatiyor-8296497_x_o.jpg', 'http://localhost/musa_eroglu_songs/Musa%20Ero%C4%9Flu%20-%20Turnalar%C4%B1n%20G%C3%B6%C3%A7%C3%BC.mp3', ''),
('Musa Eroğlu', 'yara soyleme', 'http://www.cumhuriyet.com.tr/Archive/2018/9/26/1094566_resource/aisuhdiaj.jpg', 'http://localhost/musa_eroglu_songs/Musa%20Ero%C4%9Flu%20-%20Yare%20S%C3%B6yleme%20(usluer.net).mp3', ''),
('Musa Eroğlu', 'Yolun Sonu', 'https://i.medyaradar.com/2/850/478/storage/old/newsFiles/2018/11/6/1408888/1408888.jpg', 'http://localhost/musa_eroglu_songs/Musa%20Ero%C4%9Flu%20-%20Yolun%20Sonu%20G%C3%B6r%C3%BCn%C3%BCyor.mp3', ''),
('Musa Eroğlu', 'zamansiz yagmur', 'https://www.biletix.com/static/images/live/event/eventimages/YW949_etkinlik.jpg', 'http://localhost/musa_eroglu_songs/Musa%20Ero%C4%9Flu%20-%20Zamans%C4%B1z%20Ya%C4%9Fmur%202012.mp3', ''),
('Mustafa Ceceli', 'Yaz Bunu Bir Kenara', 'https://img.gecce.com/2019/02/20/mustafa-cece-145125QR.jpg', 'http://localhost/mustafa_ceceli_songs/Mustafa%20Ceceli%20-%20Yaz%20Bunu%20Bir%20Kenara.mp3', ''),
('Mustafa Ceceli', 'yagmur agliyor', 'http://97.74.180.143/image_p/big/foto865847625706980175.jpg', 'http://localhost/mustafa_ceceli_songs/Mustafa%20Ceceli%20-%20Ya%C4%9Fmur%20A%C4%9Fl%C4%B1yor.mp3', ''),
('Mustafa Ceceli', 'sultanim', 'https://www.sarkisozusitesi.com/User_Files/editor/image/mustafa-ceceli-sultanim-sarki-sozleri.jpg', 'http://localhost/mustafa_ceceli_songs/Mustafa%20Ceceli%20-%20Sultan%C4%B1m.mp3', ''),
('Mustafa Ceceli', 'Simsiyah', 'https://cdn101.adwimg.com/u/180217/forums/a80wUHaVxSlsWzzZDfXmDzbPqpwp3KuT.jpg', 'http://localhost/mustafa_ceceli_songs/Mustafa%20Ceceli%20-%20Simsiyah.mp3', ''),
('Mustafa Ceceli', ' Sevgilim', 'http://www.hepdinle.com/wp-content/uploads/2012/11/mustafa-ceceli.jpg', 'http://localhost/mustafa_ceceli_songs/Mustafa%20Ceceli%20-%20Sevgilim.mp3', ''),
('Mustafa Ceceli', 'iyiki hayatimdasin', 'https://2.bp.blogspot.com/-iflWrpRiHYQ/WaQ_WHbq3qI/AAAAAAAABWs/4iGrLxU1PRstMQrOcchjr0maFaIAq2X_ACLcBGAs/s1600/mustafa-ceceli-iyiki-hayatimdasin.png', 'http://localhost/mustafa_ceceli_songs/Mustafa%20Ceceli%20-%20%C4%B0yi%20ki%20Hayat%C4%B1mdas%C4%B1n.mp3', ''),
('Mustafa Ceceli', 'islak imza', 'http://www.sendeyim.net/uploads/sarki/islak-imza1.jpg', 'http://localhost/mustafa_ceceli_songs/Mustafa%20Ceceli%20-%20Islak%20%C4%B0mza.mp3', ''),
('Mustafa Ceceli', 'husran', 'https://sarkisozudur.com/uploads/posts/2018-11/medium/1542716988_mustafa-ceceli-sarkilari-mustafa-ceceli-sarki-sozleri-sarkisozlerihd_com_.jpg', 'http://localhost/mustafa_ceceli_songs/Mustafa%20Ceceli%20-%20H%C3%BCsran.mp3', ''),
('Mustafa Ceceli', 'gul rengi', 'http://bobet.ir/wp-content/uploads/2017/09/mustafa-ceceli-gul-rengi-orijinal-video-klip-2015_8360140-15690_1280x720.jpg', 'http://localhost/mustafa_ceceli_songs/Mustafa%20Ceceli%20-%20G%C3%BCl%20Rengi.mp3', ''),
('Mustafa Ceceli', 'gecti o gunlar', 'https://iasbh.tmgrup.com.tr/c561ba/752/395/0/183/1224/826?u=https://isbh.tmgrup.com.tr/sbh/2017/12/02/albumumun-adi-simsiyah-ama-ruh-halim-bembeyaz-1512239590349.jpeg', 'http://localhost/mustafa_ceceli_songs/Mustafa%20Ceceli%20-%20Ge%C3%A7ti%20O%20G%C3%BCnler.mp3', ''),
('Mustafa Ceceli', 'Es', 'https://www.esenshop.com/Uploads/UrunResimleri/Mustafa-Ceceli---Es-2ca0.jpg', 'http://localhost/mustafa_ceceli_songs/Mustafa%20Ceceli%20-%20Es.mp3', ''),
('Mustafa Ceceli', 'Emri Olur', 'https://primage.blob.core.windows.net/article/2016_2_10_7_49_7_820.jpg', 'http://localhost/mustafa_ceceli_songs/Mustafa%20Ceceli%20-%20Emri%20Olur.mp3', ''),
('Mustafa Ceceli', 'dunyanin buton sabahlari', 'https://cdn101.adwimg.com/u/171103/forums/op5OoAaIkuW5a8MgorTNMeCJyNU9ty8U.jpg', 'http://localhost/mustafa_ceceli_songs/Mustafa%20Ceceli%20-%20D%C3%BCnyan%C4%B1n%20B%C3%BCt%C3%BCn%20Sabahlar%C4%B1.mp3', ''),
('Mustafa Ceceli', 'bir yalnis kac dogru', 'https://www.sevilensarkisozleri.com/sarkici/mustafa-ceceli.jpg', 'http://localhost/mustafa_ceceli_songs/Mustafa%20Ceceli%20-%20Bir%20Yanl%C4%B1%C5%9F%20Ka%C3%A7%20Do%C4%9Fru.mp3', ''),
('Mustafa Ceceli', 'Bedel', 'https://www.metropolfm.de/wp-content/uploads/2019/11/mustafa-cece-174135FM.jpg', 'http://localhost/mustafa_ceceli_songs/Mustafa%20Ceceli%20-%20Bedel.mp3', ''),
('Mustafa Ceceli', ' Aman', 'http://2.bp.blogspot.com/-xfmEHwKw_dI/UUx1J5Qg9qI/AAAAAAAAFK8/6diN3z6LHWM/s1600/Mustafa-ceceli-aman.jpg', 'http://localhost/mustafa_ceceli_songs/Mustafa%20Ceceli%20-%20Aman.mp3', ''),
('Oğuzhan Koç', 'beni iyi saniyorlar', 'https://img-s2.onedio.com/id-5be03f0e73002e954323bd07/rev-0/w-635/listing/f-jpg-webp/s-e5fea2364e1e0a548b5572f6b297911305c0516b.webp', 'http://localhost/oguzhan_songs/O%C4%9Fuzhan%20Ko%C3%A7%20-%20Beni%20%C4%B0yi%20San%C4%B1yorlar.mp3', ''),
('Oğuzhan Koç', 'Bulutlara Esir Olduk', 'https://www.magazinn.com/wp-content/uploads/2018/08/60090.jpg', 'http://localhost/oguzhan_songs/O%C4%9Fuzhan%20Ko%C3%A7%20-%20Bulutlara%20Esir%20Olduk.mp3', ''),
('Oğuzhan Koç', 'Cimri Sevgilim', 'https://onyeni.com/wp-content/uploads/2018/02/O%C4%9Fuzhan-Ko%C3%A7-Cimri-Sevgilim.jpg', 'http://localhost/oguzhan_songs/O%C4%9Fuzhan%20Ko%C3%A7%20-%20Cimri%20Sevgilim%20(Sevgililer%20G%C3%BCn%C3%BC).mp3', ''),
('Oğuzhan Koç', ' Küsme Aşka', 'https://www.adwhit.com/uploads/forums/170815/048072e58cabf7d2f442122b42f81509.jpg', 'http://localhost/oguzhan_songs/O%C4%9Fuzhan%20Ko%C3%A7%20-%20K%C3%BCsme%20A%C5%9Fka.mp3', ''),
('Oğuzhan Koç', 'sukutu hayal', 'https://pbs.twimg.com/profile_images/1086186700144025600/H6yhWRT1_400x400.jpg', 'http://localhost/oguzhan_songs/O%C4%9Fuzhan%20Ko%C3%A7%20-%20S%C3%BCkut-u%20Hayal.mp3', ''),
('Oğuzhan Koç', 'Vermem Seni Ellere', 'https://cdn101.adwimg.com/u/171018/forums/KEXJLAEtctpfqfPvgGcYSeBFAGIpqfKC.jpg', 'http://localhost/oguzhan_songs/O%C4%9Fuzhan%20Ko%C3%A7%20-%20Vermem%20Seni%20Ellere%20(Yol%20Arkada%C5%9F%C4%B1m%20Film%20M%C3%BCzi%C4%9Fi).mp3', ''),
('Reynmen', 'derdim olsun', 'http://www.wanhaber.com/d/news/131452.jpg', 'localhost/Reynmen_songs/Reynmen - Derdim Olsun (Official Video).mp3', ''),
('Reynmen', 'Ela', 'https://www.mavikanal.com/wp-content/uploads/2019/07/reynmen-yeni-sarkisi-ela-ile-rekor-uzerine-rekor-kiriyor.jpg', 'http://localhost/Reynmen_songs/Reynmen%20-%20Ela%20(Official%20Video).mp3', ''),
('Reynmen', 'Biziz', 'https://pbs.twimg.com/media/DIJ8HQzW0AAtcwN.jpg', 'http://localhost/Reynmen_songs/Reynmen%20ft.%20Lil%20Bege%20-%20Biziz.mp3', ''),
('Reynmen', 'Voyovoy', 'https://image.prntscr.com/image/vge0KGGnSdCcH7HFTRqjUg.png', 'http://localhost/Reynmen_songs/Reynmen%20ft.%20Veysel%20Zalo%C4%9Flu%20-%20Voyovoy.mp3', ''),
('Sancak', 'Bana Kendimi Ver', 'https://mp3indirco.info/resimler/2016/7/sancak-ZMiRABPIvn-0.jpg', 'http://localhost/sancak_songs/Sancak%20-%20Bana%20Kendimi%20Ver%20feat.%20Taladro%20(G%C3%B6zden%20Uzak).mp3', ''),
('Sancak', 'birak', 'https://1.bp.blogspot.com/-fQsKuesJTIU/XBF65J7RqdI/AAAAAAAAF3o/XmXzWTnkZzwrOIyeM369AaVlLQswR7ttwCLcBGAs/s1600/sancak.jpg', 'http://localhost/sancak_songs/Sancak%20-%20B%C4%B1rak%20(Official%20Video).mp3', ''),
('Sancak', 'bu ruyaysa uyandirma', 'https://img-s2.onedio.com/id-5ba8e943d1cebd44100cf031/rev-0/w-635/listing/f-jpg-webp/s-10502b78bc8d71227305cc81fa4a7008db001557.webp', 'http://localhost/sancak_songs/Sancak%20-%20Bu%20R%C3%BCyaysa%20Uyand%C4%B1rma%20(Official%20Video).mp3', ''),
('Sancak', 'deli yok ki gonlumun', 'https://m.media-amazon.com/images/I/81fFHkhSfoL._SS500_.jpg', 'http://localhost/sancak_songs/Sancak%20-%20Dili%20Yok%20ki%20G%C3%B6nl%C3%BCm%C3%BCn%20(Feat.%20Gitar%20Bar%C4%B1%C5%9F).mp3', ''),
('Sancak', ' Gitme Kal Diyemedim', 'https://www.numberone.com.tr/wp-content/uploads/2018/05/sancak-gitme-kal-diyemedim-150x150.jpg', 'http://localhost/sancak_songs/Sancak%20-%20Gitme%20Kal%20Diyemedim%20(Official%20Video).mp3', ''),
('Sancak', 'gozumdan dustugun an', 'https://t2.genius.com/unsafe/275x0/https%3A%2F%2Fimages.genius.com%2F9c5f90a71377eedf6573b627d9f62d40.500x500x1.jpg', 'http://localhost/sancak_songs/Sancak%20-%20G%C3%B6z%C3%BCmden%20D%C3%BC%C5%9Ft%C3%BC%C4%9F%C3%BCn%20An%20feat.%20Taladro%20&%20Canfeza.mp3', ''),
('Sancak', ' Korkma Söyle', 'http://www.pembekalem.net/wp-content/uploads/2016/11/sancak-korkma-soyle-sarki-sozleri-yagmur-albumu-1-650x400.jpg', 'http://localhost/sancak_songs/Sancak%20-%20Korkma%20S%C3%B6yle.mp3', ''),
('Sancak', 'sigamadim dunyalarima', 'https://1.bp.blogspot.com/-15OD3eQlb5k/WBRpCJ4DewI/AAAAAAAAA6U/App_aONqSAwHyFoRzPwRGbGdT3sRw6S4wCLcB/s1600/Sancak.jpg', 'http://localhost/sancak_songs/Sancak%20-%20S%C4%B1%C4%9Famad%C4%B1n%20D%C3%BCnyalar%C4%B1ma.mp3', ''),
('Sancak', ' Üşüyorum Aldırma', 'https://www.sozleridinle.net/wp-content/uploads/2015/12/sancak-%C3%BC%C5%9F%C3%BCyorum-ald%C4%B1rma-%C5%9Fark%C4%B1-s%C3%B6zleri.jpg', 'http://localhost/sancak_songs/Sancak%20-%20%C3%9C%C5%9F%C3%BCyorum%20Ald%C4%B1rma.mp3', ''),
('Sancak', ' Yağmur', 'https://2.bp.blogspot.com/-_IcBBPRUfls/WCkG6bJcP7I/AAAAAAAAC4s/5WyqmszorbEtoFi66cOs_JAEYYlaBdRIwCLcB/s1600/sancak%2B2.jpg', 'http://localhost/sancak_songs/Sancak%20-%20Ya%C4%9Fmur%20(%20Official%20Video%20).mp3', ''),
('Sezen Aksu', 'Git', 'https://66.media.tumblr.com/713ff03c8f6e70bec4026b823be7a8f8/tumblr_o3xynnKzKr1uad3i3o1_500.jpg', 'http://localhost/sezen_aksu_songs/Sezen%20Aksu%20-%20Git%20(Gitme%20Dur%20Ne%20Olur).mp3', ''),
('Sezen Aksu', 'Kaçın Kurası', 'https://listelist.com/wp-content/uploads/2014/02/sezen-aksu-manset-571x375.jpg', 'http://localhost/sezen_aksu_songs/Sezen%20Aksu%20-%20Ka%C3%A7%C4%B1n%20Kuras%C4%B1%20(Official%20Audio).mp3', ''),
('Sezen Aksu', 'Manifesto', 'https://m.media-amazon.com/images/I/71sb+n8yhHL._SS500_.jpg', 'http://localhost/sezen_aksu_songs/Sezen%20Aksu%20-%20Manifesto%20(Official%20Video).mp3', ''),
('Sezen Aksu', ' Sen Ağlama', 'https://cdn1.dokuzsoft.com/u/hammeronlineshop/img/c/s/e/sezen-sen-aglama-n-1494421469.jpg', 'http://localhost/sezen_aksu_songs/Sezen%20Aksu%20-%20Sen%20A%C4%9Flama.mp3', ''),
('Sezen Aksu', 'Vazgectim', 'https://4.bp.blogspot.com/-3lSSrD0IHRI/WiKhSNaX5NI/AAAAAAAAX3M/_XEIJ0ZCp-IqxFfXHspGnrQIJIesrGBSACPcBGAYYCw/s1600/sezen_aksu.jpg', 'http://localhost/sezen_aksu_songs/Sezen%20Aksu%20-%20Vazgectim%20(Lyrics%20%C5%9Eark%C4%B1%20S%C3%B6zleri).mp3', ''),
('Sezen Aksu', 'Yanarım', 'https://www.adwhit.com/uploads/forums/170802/20c0c0fc580372efed0f4ac8fc768ca9.jpg', 'http://localhost/sezen_aksu_songs/Sezen%20Aksu%20-%20Yanar%C4%B1m.mp3', ''),
('Sezen Aksu', 'Ben Sende Tutuklu Kaldım', 'https://pbs.twimg.com/media/CyIqI06XgAAEwMf.jpg', 'http://localhost/sezen_aksu_songs/Sezen%20Aksu-%20Ben%20Sende%20Tutuklu%20Kald%C4%B1m.mp3', ''),
('Sila', 'Aslan Gibi', 'https://dikkatmuzik.files.wordpress.com/2013/04/sila.jpg', 'http://localhost/sila_songs/Sila%20-%20Aslan%20Gibi%20(Official%20Music%20Video).mp3', ''),
('Sila', 'Beni Hatırla', 'https://miro.medium.com/max/638/1*DHaol9zTA5ZatyfvwzL0AA@2x.jpeg', 'http://localhost/sila_songs/S%C4%B1la%20-%20Beni%20Hat%C4%B1rla.mp3', ''),
('Sila', ' Hediye', 'https://www.temizmagazin.com/sites/default/files/5d47b06ec03c0e26689ce3fa.jpg', 'http://localhost/sila_songs/Sila%20-%20Hediye%20(Official%20Music%20Video).mp3', ''),
('Sila', 'karanfil', 'https://oynattv.com/wp-content/uploads/2019/07/s%C4%B1la-1.jpg', 'http://localhost/sila_songs/S%C4%B1la%20-%20karanfil.mp3', ''),
('Sila', ' Vaziyetler', 'http://www.radyofaresi.com/wp-content/uploads/2014/02/s%C4%B1la-vaziyetler.jpg', 'http://localhost/sila_songs/Sila%20-%20Vaziyetler%20(Official%20Music%20Video).mp3', ''),
('Sila', 'Yabanci', 'http://www.objektifhaber.com/resimler/166000/166947_3.jpg', 'http://localhost/sila_songs/Sila%20-%20Yabanci%20(Official%20Music%20Video).mp3', ''),
('Sila', 'Yan Benimle', 'http://videodruzi.com/wp-content/uploads/2017/07/sila-yan-benimle-1.jpg', 'http://localhost/sila_songs/Sila%20-%20Yan%20Benimle%20(Official%20Music%20Video).mp3', ''),
('Sila', ' Yoruldum', 'http://www.eurovizyon.co.uk/images/resize/100/656x400/haberler/2018/05/sarkici_sila_yoruldum_sarkisini_soylerken_aglamaya_basladi_h56798_67b53.jpg', 'http://localhost/sila_songs/Sila%20-%20Yoruldum%20(Official%20Music%20Video).mp3', ''),
('Simge', 'As Bayrakları', 'https://im.haberturk.com/2019/08/23/ver1566548620/2515656_810x458.jpg', 'http://localhost/simge_songs/Simge%20-%20As%20Bayraklar%C4%B1.mp3', ''),
('Simge', 'Aşkın Olayım', 'http://i.milliyet.com.tr/MolatikGaleri/2019/02/25/fft373_mf32577703.Jpeg', 'http://localhost/simge_songs/Simge%20-%20A%C5%9Fk%C4%B1n%20Olay%C4%B1m%20(Onurr).mp3', ''),
('Simge', 'Ben Bazen', 'https://img-s1.onedio.com/id-5b438e0deae61ea713d3ec4c/rev-0/w-635/listing/f-jpg-webp/s-97e4df847a6a23dd584e40259cc58964805ab9b6.webp', 'http://localhost/simge_songs/Simge%20-%20Ben%20Bazen.mp3', ''),
('Simge', 'Bip Bip', 'https://www.adwhit.com/uploads/forums/170726/ce4ca6881ab694d231e88e478ad36c59.jpg', 'http://localhost/simge_songs/Simge%20-%20Bip%20Bip%20(Bayra%C5%9Fa%20Mix).mp3', ''),
('Simge', 'Kamera', 'https://www.haberler12.com/images/haberler/2016/07/simge_kamera_sarkisi_sozleri_ve_klibi_h1428_85b85.jpg', 'http://localhost/simge_songs/Simge%20-%20Kamera.mp3', ''),
('Simge', 'Miş Miş', 'https://cdn2.gazeteaksam.com/aksam/imgsdisk/2016/06/28/280620161853505551639_2.jpg', 'http://localhost/simge_songs/Simge%20-%20Mi%C5%9F%20Mi%C5%9F.mp3', ''),
('Simge', 'Öpücem', 'https://m.media-amazon.com/images/I/81qYGXtYGqL._SS500_.jpg', 'http://localhost/simge_songs/Simge%20-%20%C3%96p%C3%BCcem.mp3', ''),
('Simge', 'Prens & Prenses', 'https://clippz.ru/images/simge-prens-prenses_hcmjmtnc/11.jpg', 'http://localhost/simge_songs/Simge%20-%20Prens%20&%20Prenses.mp3', ''),
('Simge', 'Üzülmedin mi', 'http://www.radyoduygu.net/Images/haberler/simge-1511952298.jpg', 'http://localhost/simge_songs/Simge%20-%20%C3%9Cz%C3%BClmedin%20mi.mp3', ''),
('Simge', 'Yalnız Başına', 'https://im.haberturk.com/2019/10/15/ver1571115688/2530969_810x458.jpg', 'http://localhost/simge_songs/Simge%20-%20Yaln%C4%B1z%20Ba%C5%9F%C4%B1na.mp3', ''),
('Simge', 'Yankı', 'https://www.adwhit.com/uploads/forums/170724/4fe5743b9b93b096d49e321267eadd5a.jpg', 'http://localhost/simge_songs/Simge%20-%20Yank%C4%B1.mp3', ''),
('Tarkan', 'Beni Çok Sev', 'https://www.haberler12.com/images/haberler/2017/06/tarkan_beni_cok_sev_sarki_sozleri_h2961_49452.jpg', 'http://localhost/tarkan_songs/Tarkan%20-%20Beni%20%C3%87ok%20Sev.mp3', ''),
('Tarkan', 'Dudu', 'https://img.discogs.com/caFeSQGUYuDw1PR2ItYgkICQ8gA=/fit-in/500x493/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-9868999-1487832533-1390.jpeg.jpg', 'http://localhost/tarkan_songs/TARKAN%20-%20Dudu.mp3', ''),
('Tarkan', 'Kedi Gibi', 'https://4.bp.blogspot.com/-4m2iaIktnoM/WUHFeiTnYvI/AAAAAAAAElk/O7z-HWPtwIgYqKbsSYBbMm9NjGdwFfK5gCLcBGAs/s1600/tarkan5.jpg', 'http://localhost/tarkan_songs/TARKAN%20-%20Kedi%20Gibi.mp3', ''),
('Tarkan', 'Öp', 'https://i.azonceoldu.com/2/640/360/storage/files/images/2018/10/11/tarkan-kedi-gibi-sozleri-dinle-K92y_cover.jpg', 'http://localhost/tarkan_songs/TARKAN%20-%20%C3%96p.mp3', ''),
('Tarkan', 'Yolla', 'http://muzikonair.com/wp-content/uploads/2017/06/limos-satar-gibi-album-satilmaz-iste-tarkan-gercegi-muzikonair.jpg', 'http://localhost/tarkan_songs/Tarkan%20-%20Yolla.mp3', ''),
('Toygar Işıklı', 'Sen Yanımdayken', 'https://kalpcarpintisi.files.wordpress.com/2016/09/hqdefault.jpg', 'http://localhost/toygar_isikli_songs/Sen%20Yan%C4%B1mdayken%20-%20Toygar%20I%C5%9F%C4%B1kl%C4%B1.mp3', ''),
('Toygar Işıklı', 'Ben Kötü Biri Değilim', 'https://2.bp.blogspot.com/-5krqIXb9sAA/UZkToxLKZcI/AAAAAAACXrA/uT1uOMBlRqs/s1600/toygar+isikli+ben+kotu+biri+degilim.jpg', 'http://localhost/toygar_isikli_songs/Toygar%20I%C5%9F%C4%B1kl%C4%B1%20-%20Ben%20K%C3%B6t%C3%BC%20Biri%20De%C4%9Filim%20(%20Official%20Video%20).mp3', ''),
('Toygar Işıklı', ' Bırak Sende Kaybolayım', 'http://www.sarkisozuara.net/uploads/sanatci/2015/03/18/52c0c19433b693752733f2c07a33caf1.png', 'http://localhost/toygar_isikli_songs/Toygar%20I%C5%9F%C4%B1kl%C4%B1%20-%20B%C4%B1rak%20Sende%20Kaybolay%C4%B1m.mp3', ''),
('Toygar Işıklı', 'Çok Geç', 'https://image.winudf.com/v2/image/Y29tLm15aXNpa2xpLnRya19zY3JlZW5fMF8xNTM1ODI1MjkwXzA3OQ/screen-0.jpg?fakeurl=1&type=.jpg', 'http://localhost/toygar_isikli_songs/Toygar%20I%C5%9F%C4%B1kl%C4%B1%20-%20%C3%87ok%20Ge%C3%A7.mp3', ''),
('Toygar Işıklı', 'Gonlum Gocebe', 'https://okimdirkim.com/wp-content/uploads/2018/12/Toygar-I%C5%9F%C4%B1kl%C4%B1-Kimdir.jpg', 'http://localhost/toygar_isikli_songs/Toygar%20Isikli%20-%20Gonlum%20Gocebe.mp3', ''),
('Toygar Işıklı', 'Hayat Gibi', 'https://www.biletix.com/static/images/live/event/eventimages/toygar_isikli1.jpg', 'http://localhost/toygar_isikli_songs/Toygar%20I%C5%9F%C4%B1kl%C4%B1%20-%20Hayat%20Gibi%20(%20Official%20Video%20).mp3', ''),
('Toygar Işıklı', 'Korkuyorum', 'https://im.haberturk.com/2017/12/13/ver1513147041/1752750_620x410.jpg', 'http://localhost/toygar_isikli_songs/Toygar%20I%C5%9F%C4%B1kl%C4%B1%20-%20Korkuyorum.mp3', ''),
('Toygar Işıklı', 'Nergis', 'https://im.haberturk.com/2011/08/02/ver1312288009/654148_detay.jpg', 'http://localhost/toygar_isikli_songs/Toygar%20I%C5%9F%C4%B1kl%C4%B1%20-%20Nergis.mp3', ''),
('Toygar Işıklı', 'Sen Esittir Ben', 'https://i2.milimaj.com/i/milliyet/75/0x410/5c8e4dbf07291c1d7405f5dd.jpg', 'http://localhost/toygar_isikli_songs/Toygar%20Isikli%20-%20Sen%20Esittir%20Ben.mp3', ''),
('Toygar Işıklı', 'Söz Olur', 'http://i1.imgiz.com/rshots/8145/toygar-isikli-soz-olur_8145282-56880_1800x945.jpg', 'http://localhost/toygar_isikli_songs/Toygar%20I%C5%9F%C4%B1kl%C4%B1%20-%20S%C3%B6z%20Olur%20(%20Official%20Video%20).mp3', ''),
('Tuğçe Kandemir', ' Açıldı Kapılar', 'https://nereli.co/wp-content/uploads/2019/08/Tu%C4%9F%C3%A7e-kandemir-nereli-aslen-kimdir-boyu-ka%C3%A7-ka%C3%A7-kilo.jpg', 'http://localhost/tugce_kandemir_songs/Tu%C4%9F%C3%A7e%20Kandemir%20-%20A%C3%A7%C4%B1ld%C4%B1%20Kap%C4%B1lar%20(2018).mp3', ''),
('Tuğçe Kandemir', 'Dayana Dayana', 'https://www.bcatimes.com/wp-content/uploads/2019/03/tugce-kandemir.jpg', 'http://localhost/tugce_kandemir_songs/Tu%C4%9F%C3%A7e%20Kandemir%20-%20Dayana%20Dayana%20(2018).mp3', ''),
('Tuğçe Kandemir', 'Elveda', 'https://www.muzikalturk.com/wp-content/uploads/2019/01/tugce.jpg', 'http://localhost/tugce_kandemir_songs/Tu%C4%9F%C3%A7e%20Kandemir%20-%20Elveda.mp3', ''),
('Tuğçe Kandemir', ' Gülü Soldurmam', 'http://muzikonair.com/wp-content/uploads/2019/10/tugce-kandemir-konser.jpg', 'http://localhost/tugce_kandemir_songs/Tu%C4%9F%C3%A7e%20Kandemir%20-%20G%C3%BCl%C3%BC%20Soldurmam.mp3', ''),
('Tuğçe Kandemir', 'kalbi uzaklarda bir adam var', 'https://sarkisozleri.netd.com/wp-content/uploads/2019/09/tu%C4%9F%C3%A7e-450x450.png', 'http://localhost/tugce_kandemir_songs/Tu%C4%9F%C3%A7e%20Kandemir%20-%20kalbi%20uzaklarda%20bir%20adam%20var%20(official%20video).mp3', ''),
('Tuğçe Kandemir', 'yagmur', 'https://sarkisozleri1.com/assets/images/sanatcilar/tugce-kandemir/tugce-kandemir.jpg', 'http://localhost/tugce_kandemir_songs/Tu%C4%9F%C3%A7e%20Kandemir%20-%20Ya%C4%9Fmur%20(S%C3%96ZLER%C4%B0%20&%20LYRICS).mp3', ''),
('Tuğçe Kandemir', 'Yanlış', 'https://im.haberturk.com/yerel_haber/2019/05/04/ver1556919962/68814073_620x410.jpg', 'http://localhost/tugce_kandemir_songs/Tu%C4%9F%C3%A7e%20Kandemir%20-%20Yanl%C4%B1%C5%9F.mp3', ''),
('Yıldız Tilbe', 'Ama Evlisin', 'https://foto.haberler.com/haber/2018/05/18/yildiz-tilbe-39-sanatcinin-yer-aldigi-yildiz-10862440_9249_o.jpg', 'http://localhost/yildiz_tilbe_songs/Y%C4%B1ld%C4%B1z%20Tilbe%20-%20Ama%20Evlisin.mp3', ''),
('Yıldız Tilbe', 'Çabuk Olalım Aşkım', 'http://cdn.lodoshaber.com/haber/2019/08/23/374592-iste-yildiz-tilbe-nin-yillardir-gizledigi-kizi-5d5fb77a662a0.jpg', 'http://localhost/yildiz_tilbe_songs/Y%C4%B1ld%C4%B1z%20Tilbe%20-%20%C3%87abuk%20Olal%C4%B1m%20A%C5%9Fk%C4%B1m%20(Official%20Video).mp3', ''),
('Yıldız Tilbe', 'Dağıldım Biraz', 'https://cdntr1.img.sputniknews.com/images/103336/44/1033364492.png', 'http://localhost/yildiz_tilbe_songs/Y%C4%B1ld%C4%B1z%20Tilbe%20-%20Da%C4%9F%C4%B1ld%C4%B1m%20Biraz.mp3', ''),
('Yıldız Tilbe', 'Olsun mu olmasin', 'https://images.gazeteyenigun.com.tr/news/2019/7/yildiz-tilbe-den-deniz-feneri-ne-bagis-5263-1bad8f.jpg', 'http://localhost/yildiz_tilbe_songs/Yildiz%20Tilbe%20-%20Olsun%20mu%20olmasin%20HQ.mp3', ''),
('Yıldız Tilbe', 'Vazgeçtim', 'http://www.anadolununsesi.tc/wp-content/uploads/2018/02/yildiz-tilbe-nin-en-iyi-10-sarkisi_780x324.jpg', 'http://localhost/yildiz_tilbe_songs/Y%C4%B1ld%C4%B1z%20Tilbe%20-%20Vazge%C3%A7tim.mp3', ''),
('Yıldız Tilbe', 'Yürü Anca Gidersin', 'https://i1.imgiz.com/data/videoshots/7300/7300296-2069.jpg', 'http://localhost/yildiz_tilbe_songs/Y%C4%B1ld%C4%B1z%20Tilbe%20-%20Y%C3%BCr%C3%BC%20Anca%20Gidersin%20(Official%20Video).mp3', ''),
('Yıldız Tilbe', 'al ömrümü', 'https://icdn.tgrthaber.com.tr/images/haberler/2017_09/buyuk/yildiz-tilbe-acikladi-mahkemeye-verecegim-o-kisiyi-1506068970.jpg', 'http://localhost/yildiz_tilbe_songs/y%C4%B1ld%C4%B1z%20tilbe%20al%20%C3%B6mr%C3%BCm%C3%BC%20koy%20%C3%B6mr%C3%BCn%C3%BCn%20%C3%BCst%C3%BCne.mp3', ''),
('Yıldız Tilbe', 'delikanlım', 'http://www.magazinsortie.com/images/haberler/2019/02/yildiz-tilbe-den-sevgililer-gunu-sarkisi-sen-asiksin-bana_061d7.jpg', 'http://localhost/yildiz_tilbe_songs/y%C4%B1ld%C4%B1z%20tilbe%20delikanl%C4%B1m.mp3', ''),
('Zara', 'Aşıklar Şehri', 'https://m.media-amazon.com/images/I/81sgp5qklaL._SS500_.jpg', 'http://localhost/zara_songs/Kutsi%20&%20Zara%20-%20A%C5%9F%C4%B1klar%20%C5%9Eehri%20(%20Official%20Video%20).mp3', ''),
('Zara', 'Ağla Halime', 'https://turkcellmuzik-img.tcellcdn.net/resize/[WIDTH]/[HEIGHT]/TR0391850053.jpg', 'http://localhost/zara_songs/Zara%20-%20A%C4%9Fla%20Halime%20-%20(Official%20Video).mp3', ''),
('Zara', 'Benim Hayatım', 'https://www.adwhit.com/uploads/forums/170822/1562d58e4567365908d7275a5a731cf1.jpg', 'http://localhost/zara_songs/Zara%20-%20Benim%20Hayat%C4%B1m%20(%20Official%20Video%20).mp3', ''),
('Zara', ' Dilenci', 'https://i4.hurimg.com/i/hurriyet/75/750x422/572b08d367b0a96d0c6f4b26.jpg', 'http://localhost/zara_songs/Zara%20-%20Dilenci%20Orhan%20Gencebay%20%C4%B0le%20Bir%20%C3%96m%C3%BCr%20Yeni%20(2013).mp3', ''),
('Zara', ' Seni Yazdım Kalbime', 'https://www.sarkilisozler.com/cdm/0417160931zara-seni-yazdim-kalbime-resimli-2016-sozleri.jpg', 'http://localhost/zara_songs/Zara%20-%20Seni%20Yazd%C4%B1m%20Kalbime%20(%20Official%20Video%20).mp3', ''),
('Zara', ' Vur Gitsin Beni', 'https://alte-424668.c.cdn77.org/artist/zara.jpg', 'http://localhost/zara_songs/Zara%20-%20Vur%20Gitsin%20Beni%20-%20(%20Official%20Audio%20).mp3', ''),
('Ziynet Sali', 'Ağlar mıyım Ağlamam', 'https://www.havadiskibris.com/wp-content/uploads/2018/01/Ziynet-Sali-1.jpg', 'http://localhost/ziynet_sali_songs/Ziynet%20Sali%20-%20A%C4%9Flar%20m%C4%B1y%C4%B1m%20A%C4%9Flamam.mp3', ''),
('Ziynet Sali', ' Bana da Söyle', 'https://www.bilalozcan.com/Content/UserFiles/NewsItem/big/ziynet-salinin-makyajsiz-hali-sasirtti_5512_11-28-46.jpg', 'http://localhost/ziynet_sali_songs/Ziynet%20Sali%20-%20Bana%20da%20S%C3%B6yle.mp3', '');
INSERT INTO `songs` (`singername`, `songname`, `songpic`, `songurl`, `liked`) VALUES
('Ziynet Sali', 'Dağınık Yatak', 'https://www.haberankara.com/images/haberler/tikla-izle-ziynet-salinin-yeni-klibi-daginik-yatak-yayinlandi74cccf3824a050c3446f.jpg', 'http://localhost/ziynet_sali_songs/Ziynet%20Sali%20-%20Da%C4%9F%C4%B1n%C4%B1k%20Yatak.mp3', ''),
('Ziynet Sali', 'Deli Divanenim', 'https://www.trtmuzik.net.tr/public/dm_upload/modul13/281704cc-70a3-476d-af61-38f4b97e86b2.png', 'http://localhost/ziynet_sali_songs/Ziynet%20Sali%20-%20Deli%20Divanenim.mp3', ''),
('Ziynet Sali', 'Deli', 'http://www.ucretsizmp3yukle.com/wp-content/uploads/2018/07/Ziynet-sali-deli-divanenim-indir-768x432.jpg', 'http://localhost/ziynet_sali_songs/Ziynet%20Sali%20-%20Deli.mp3', ''),
('Ziynet Sali', 'Herşey Güzel Olacak', 'http://www.haberinadresi.com/images/resize/100/656x400/haberler/ziynet_sali_yi_de_hacklediler_h220572_973a8.Jpeg', 'http://localhost/ziynet_sali_songs/Ziynet%20Sali%20-%20Her%C5%9Fey%20G%C3%BCzel%20Olacak.mp3', ''),
('Ziynet Sali', 'Rüya', 'http://d.kibris724.com/news/123276.jpg', 'http://localhost/ziynet_sali_songs/Ziynet%20Sali%20-%20R%C3%BCya.mp3', ''),
('Ziynet Sali', 'Hadi Hoppalara', 'https://3.bp.blogspot.com/-7lz7MQRHZqs/W2MZlMNsvWI/AAAAAAAAEEs/j8qBiDe9_N8I7O7XUdVbW6pjk0AFl-YsACLcBGAs/s1600/Ziynet_Sali-Hadi_Hoppalara_2018.jpg', 'http://localhost/ziynet_sali_songs/Ziynet%20Sali%20feat.%20Berk%20Co%C5%9Fkun%20-%20Hadi%20Hoppalara.mp3', ''),
('İlyas Yalçıntaş', 'Bilmece', 'https://bulmp3.com/img/ilyas-yalcintas-bilmece.jpg', 'http://localhost/ilyas_yalcintas_songs/%C4%B0lyas%20Yal%C3%A7%C4%B1nta%C5%9F%20-%20Bilmece.mp3', ''),
('İlyas Yalçıntaş', 'bu nasil veda', 'https://img.youtube.com/vi/S1B2hUnmBvY/hqdefault.jpg', 'http://localhost/ilyas_yalcintas_songs/%C4%B0lyas%20Yal%C3%A7%C4%B1nta%C5%9F%20-%20Bu%20Nas%C4%B1l%20Veda.mp3', ''),
('İlyas Yalçıntaş', 'Farzet', 'https://i.ytimg.com/vi/S8RBxLcDtok/mqdefault.jpg', 'http://localhost/ilyas_yalcintas_songs/%C4%B0lyas%20Yal%C3%A7%C4%B1nta%C5%9F%20-%20Farzet.mp3', ''),
('İlyas Yalçıntaş', 'gel be gokyuzum', 'http://muzikonair.com/wp-content/uploads/2017/05/ilyas-yalcintas-muzikonair.gif', 'http://localhost/ilyas_yalcintas_songs/%C4%B0lyas%20Yal%C3%A7%C4%B1nta%C5%9F%20-%20Gel%20Be%20G%C3%B6ky%C3%BCz%C3%BCm.mp3', ''),
('İlyas Yalçıntaş', 'gul bence', 'https://img-s1.onedio.com/id-5ba4be91573b955120f54506/rev-0/w-635/listing/f-jpg-webp/s-4ed9ff55248358275ee48751f4b65fb0c960d47f.webp', 'http://localhost/ilyas_yalcintas_songs/%C4%B0lyas%20Yal%C3%A7%C4%B1nta%C5%9F%20-%20G%C3%BCl%20Bence.mp3', ''),
('İlyas Yalçıntaş', 'icemdeki duman', 'https://1.bp.blogspot.com/-pZY4OjOzMGk/VyHh6-w9S2I/AAAAAAAAAEM/9hyxTulIln87NoBgTTdUFZIpcyBFKidfACLcB/s1600/i%25C3%25A7indeki%2Bduman.jpg', 'http://localhost/ilyas_yalcintas_songs/%C4%B0lyas%20Yal%C3%A7%C4%B1nta%C5%9F%20-%20%C4%B0%C3%A7imdeki%20Duman.mp3', ''),
('İlyas Yalçıntaş', 'Kirli Kadeh', 'https://www.mp3indirdur.ist/upload/music/ilyas-yalcintas-kirli-kadeh.jpg', 'http://localhost/ilyas_yalcintas_songs/%C4%B0lyas%20Yal%C3%A7%C4%B1nta%C5%9F%20-%20Kirli%20Kadeh.mp3', ''),
('İlyas Yalçıntaş', 'Nefes', 'https://beepsong.com/assets/media/2016/11/Ilyas-Yalcintas.jpg', 'http://localhost/ilyas_yalcintas_songs/%C4%B0lyas%20Yal%C3%A7%C4%B1nta%C5%9F%20-%20Nefes.mp3', ''),
('İlyas Yalçıntaş', 'Sadem', 'https://images.shazam.com/coverart/t302824218-i1071525285_s400.jpg', 'http://localhost/ilyas_yalcintas_songs/%C4%B0lyas%20Yal%C3%A7%C4%B1nta%C5%9F%20-%20Sadem.mp3', ''),
('İlyas Yalçıntaş', 'yagmur', 'https://iasbh.tmgrup.com.tr/43c5a1/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2018/02/24/ilyas-yalcintas-bizim-sanatcilar-hic-risk-almiyor-1519461989397.jpg', 'http://localhost/ilyas_yalcintas_songs/%C4%B0lyas%20Yal%C3%A7%C4%B1nta%C5%9F%20feat.%20Ayta%C3%A7%20Kart%20-%20Ya%C4%9Fmur.mp3', ''),
('İrem Derici', 'ask esittir biz', 'https://m.media-amazon.com/images/I/7106XDD+FLL._SS500_.jpg', 'http://localhost/irem_derici_songs/%C4%B0rem%20Derici%20-%20A%C5%9Fk%20E%C5%9Fittir%20Biz.mp3', ''),
('İrem Derici', 'bana hicbir sey olmaz', 'https://m.media-amazon.com/images/I/81XKcHWgGXL._SS500_.jpg', 'http://localhost/irem_derici_songs/%C4%B0rem%20Derici%20-%20Bana%20Hi%C3%A7bir%20%C5%9Eey%20Olmaz.mp3', ''),
('İrem Derici', 'bazi asklar yarim kalmali', 'https://m.media-amazon.com/images/I/81X1-Q9QRqL._SS500_.jpg', 'http://localhost/irem_derici_songs/%C4%B0rem%20Derici%20-%20Baz%C4%B1%20A%C5%9Fklar%20Yar%C4%B1m%20Kalmal%C4%B1.mp3', ''),
('İrem Derici', ' Evlenmene Bak', 'https://www.mp3indirv.net/kapak/irem-derici-meftun-y-emre-remix.jpg', 'http://localhost/irem_derici_songs/%C4%B0rem%20Derici%20-%20Evlenmene%20Bak.mp3', ''),
('İrem Derici', 'Kalbimin Tek Sahibine', 'http://www.indirvideoizle.com/uploads/icerik/irem-derici-kalbimin-tek-sahibine-indir-irem-derici-kalbimin-tek-sahibine-mp3-indir-1403807052.jpg', 'http://localhost/irem_derici_songs/%C4%B0rem%20Derici%20-%20Kalbimin%20Tek%20Sahibine.mp3', ''),
('İrem Derici', 'tektas', 'https://i.hizliresim.com/O0znqZ.jpg', 'http://localhost/irem_derici_songs/%C4%B0rem%20Derici%20-%20Tekta%C5%9F.mp3', ''),
('İrem Derici', 'yalnis alarm', 'http://www.mp3indirdur.mobi/album/Irem-Derici-Irem-Derici-Akustik.jpg', 'http://localhost/irem_derici_songs/%C4%B0rem%20Derici%20-%20Yanl%C4%B1%C5%9F%20Alarm.mp3', '');

-- --------------------------------------------------------

--
-- Table structure for table `sss`
--

CREATE TABLE `sss` (
  `name` varchar(100) COLLATE utf8_turkish_ci NOT NULL,
  `song` varchar(500) COLLATE utf8_turkish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `userlikes`
--

CREATE TABLE `userlikes` (
  `userEmail` varchar(250) COLLATE utf8_turkish_ci NOT NULL,
  `songName` varchar(250) COLLATE utf8_turkish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Dumping data for table `userlikes`
--

INSERT INTO `userlikes` (`userEmail`, `songName`) VALUES
('ali1@gmail.com', 'ben seni cok sevdim'),
('ali1@gmail.com', 'Seni Seviyorum'),
('ali303036@gmail.com', 'Sen Olsan Bari'),
('ali303036@gmail.com', 'halil ibrahim'),
('ali303036@gmail.com', 'mihriban'),
('ali303036@gmail.com', 'Telli Turnam'),
('ali303036@gmail.com', 'Nasilsin askta');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `fname` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `lname` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `phone` int(30) NOT NULL,
  `profilepic` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `coverpic` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`fname`, `lname`, `email`, `password`, `phone`, `profilepic`, `coverpic`) VALUES
('Ahmad', 'asdasd', 'abd303035@gmail.com', '123456', 2147483647, '', ''),
('abdallah', 'dereia', 'abd303036@gmail.com', '123456', 599068222, 'http://localhost/eypioimg.png', 'http://localhost/ManWeb-landing.png'),
('Ahmad', 'asdasd', 'abd303067@gmail.com', '123456', 456435345, '', ''),
('abdallah', 'dereia', 'abd303096@gmail.com', '123456', 568980666, 'http://localhost/altprofile.png', 'http://localhost/altcover.jpg'),
('Ahmad', 'asdasd', 'abd30565@gmail.com', '123456', 5345345, '', ''),
('Ahmad', 'dereia', 'abd367036@gmail.com', '123456', 567567857, 'http://localhost/altprofile.png', 'http://localhost/altcover.jpg'),
('abdallah', 'Dereia', 'abd505056@gmail.com', '123456', 568202133, '', ''),
('ali', 'ahmad', 'ali1@gmail.com', '123456', 599068546, 'http://localhost/altprofile.png', 'http://localhost/altcover.jpg'),
('bara', 'barham', 'ali303036@gmail.com', '123456', 33453453, 'http://localhost/dereia.jpg', 'http://localhost/home.jpg'),
('Ahmad', 'asdasd', 'arr303036@gmail.com', '123456', 345353453, '', ''),
('Alya', 'Sami', 'asdf@gmai.com', '123456', 47778856, '', ''),
('Abd', 'asdasdasd', 'asdsd@kaka.com', '123456', 244234234, '', ''),
('Ahmad', 'asdasd', 'asdsd44@kaka.com', '123456', 599068227, '', ''),
('asmaa', 'saleem', 'asmaa@gmail.com', '123456', 456456456, 'http://localhost/muratimg.png', 'http://localhost/fride.png'),
('john', 'doe', 'example@gmail.com', '123456', 587990876, 'http://localhost/altprofile.png', 'http://localhost/altcover.jpg'),
('hamdan', 'jehad', 'hamdan.awa.eng@gmail.com', '123456', 654165, '', ''),
('john', 'Doe', 'john@gmail.com', '123456', 455879222, 'http://localhost/altprofile.png', 'http://localhost/altcover.jpg'),
('nuh', 'sameer', 'nuh@gmail.com', '123456', 67565675, 'http://localhost/altprofile.png', 'http://localhost/altcover.jpg'),
('sameer', 'sadi', 'sameer@gmail.com', '123456', 546456456, 'http://localhost/altprofile.png', 'http://localhost/altcover.jpg'),
('sufyan', 'samara', 'sufyan@gmail.com', '123456', 568222678, 'http://localhost/altprofile.png', 'http://localhost/altcover.jpg'),
('sameer', 'kayed', 'vbd303036@gmail.com', '123456', 453546352, 'http://localhost/altprofile.png', 'http://localhost/altcover.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `singers`
--
ALTER TABLE `singers`
  ADD PRIMARY KEY (`singername`);

--
-- Indexes for table `songs`
--
ALTER TABLE `songs`
  ADD KEY `singername` (`singername`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`,`phone`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `songs`
--
ALTER TABLE `songs`
  ADD CONSTRAINT `songs_ibfk_1` FOREIGN KEY (`singername`) REFERENCES `singers` (`singername`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
