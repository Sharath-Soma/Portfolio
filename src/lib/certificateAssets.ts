import aicteImage from '../assets/cetificates/AICTE Sharath.jpg';
import ciscoImage from '../assets/cetificates/CCNA Sharath.jpg';
import ibmImage from '../assets/cetificates/IBM Coursera.jpg';
import nptelImage from '../assets/cetificates/NPTEL.jpg';
import oracleImage from '../assets/cetificates/Oracle Dev Gym.jpg';
import hackerrankImage from '../assets/cetificates/SQL Hackerrank.jpg';

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
