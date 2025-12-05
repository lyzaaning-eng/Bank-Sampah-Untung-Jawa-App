import { UMKMProduct, WasteCategory, WasteGuideItem } from './types';

export const WASTE_GUIDE_DATA: WasteGuideItem[] = [
  {
    id: '1',
    name: 'Sisa Makanan',
    category: WasteCategory.ORGANIK,
    description: 'Sisa nasi, sayuran, buah-buahan, tulang ikan.',
    disposalMethod: 'Masukkan ke tong hijau. Bisa diolah menjadi pupuk kompos atau pakan maggot.',
    icon: '🍎'
  },
  {
    id: '2',
    name: 'Daun Kering',
    category: WasteCategory.ORGANIK,
    description: 'Guguran daun pohon di sekitar halaman homestay atau jalan.',
    disposalMethod: 'Kumpulkan di lubang biopori atau tong kompos.',
    icon: '🍂'
  },
  {
    id: '3',
    name: 'Botol Plastik',
    category: WasteCategory.ANORGANIK,
    description: 'Botol air mineral, botol minuman kemasan.',
    disposalMethod: 'Remas hingga gepeng, pisahkan tutupnya. Masukkan tong kuning.',
    icon: '🥤'
  },
  {
    id: '4',
    name: 'Kaleng Minuman',
    category: WasteCategory.ANORGANIK,
    description: 'Kaleng soda, kaleng susu, logam ringan.',
    disposalMethod: 'Bersihkan sisa cairan, gepengkan jika bisa. Masukkan tong kuning.',
    icon: '🥫'
  },
  {
    id: '5',
    name: 'Kertas & Kardus',
    category: WasteCategory.ANORGANIK,
    description: 'Koran bekas, kardus mie instan, kertas HVS.',
    disposalMethod: 'Pastikan kering dan tidak berminyak. Lipat rapi.',
    icon: '📦'
  },
  {
    id: '6',
    name: 'Baterai Bekas',
    category: WasteCategory.RESIDU,
    description: 'Baterai remote, jam dinding, atau HP.',
    disposalMethod: 'JANGAN dibuang sembarangan. Serahkan ke petugas khusus B3.',
    icon: '🔋'
  },
  {
    id: '7',
    name: 'Masker Medis',
    category: WasteCategory.RESIDU,
    description: 'Masker sekali pakai.',
    disposalMethod: 'Gunting tali masker, bungkus rapat, masukkan tong merah.',
    icon: '😷'
  }
];

export const UMKM_PRODUCTS: UMKMProduct[] = [
  {
    id: '101',
    name: 'Keripik Sukun',
    shopName: 'Warung Bu Tati',
    pointsCost: 500,
    imageUrl: 'https://picsum.photos/300/200?random=1',
    description: 'Camilan khas Pulau Untung Jawa, renyah dan gurih.'
  },
  {
    id: '102',
    name: 'Es Kelapa Muda',
    shopName: 'Kelapa Segar Pak Budi',
    pointsCost: 300,
    imageUrl: 'https://picsum.photos/300/200?random=2',
    description: 'Segarkan harimu dengan kelapa murni di pinggir pantai.'
  },
  {
    id: '103',
    name: 'Sewa Sepeda (1 Jam)',
    shopName: 'Rental Sepeda Berkah',
    pointsCost: 1000,
    imageUrl: 'https://picsum.photos/300/200?random=3',
    description: 'Keliling pulau lebih asik dengan sepeda.'
  },
  {
    id: '104',
    name: 'Gantungan Kunci Kerang',
    shopName: 'Souvenir Mpok Leha',
    pointsCost: 250,
    imageUrl: 'https://picsum.photos/300/200?random=4',
    description: 'Oleh-oleh kerajinan tangan cantik dari kerang asli.'
  }
];
