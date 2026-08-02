import aicteImage from '../assets/cetificates/AICTE Sharath.webp';
import ciscoImage from '../assets/cetificates/CCNA Sharath.webp';
import ibmImage from '../assets/cetificates/IBM Coursera.webp';
import nptelImage from '../assets/cetificates/NPTEL.webp';
import oracleImage from '../assets/cetificates/Oracle Dev Gym.webp';
import hackerrankImage from '../assets/cetificates/SQL Hackerrank.webp';

// Every certificate is imported by Vite at build time. Keep this file as the
// single source of truth for local certificate assets.
export const certificateAssets = {
  aicte: aicteImage,
  cisco: ciscoImage,
  hackerrank: hackerrankImage,
  ibm: ibmImage,
  nptel: nptelImage,
  oracle: oracleImage,
} as const;
