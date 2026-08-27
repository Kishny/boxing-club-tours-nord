#!/usr/bin/env node

/**
 * Script pour ajouter tous les athlètes à MongoDB
 * Exécution: npx tsx scripts/seed-athletes.js
 */

import mongoose from 'mongoose';
import Athlete from '../src/models/Athlete.ts';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not set in .env');
  process.exit(1);
}

const athletes = [
  {
    name: 'Stacy VARGAS',
    slug: 'stacy-vargas',
    photo: '/images/athletes/stacy.png',
    discipline: 'Kickboxing',
    level: 'Avancé',
    record: '15 victoires • 3 défaites',
    description: 'Combattante technique et explosive, Stacy incarne la rigueur, l\'intensité et la progression structurée du Boxing Club Tours Nord.',
    palmares: ['Championne régionale 2024', 'Finaliste Coupe de France', 'Athlète élite du club'],
    accent: '#ef4444',
    icon: 'flame',
    active: true,
  },
  {
    name: 'Mehdi Belkacem',
    slug: 'mehdi-belkacem',
    photo: '/images/athletes/mehdi.png',
    discipline: 'K1 Rules',
    level: 'Semi-professionnel',
    record: '12 victoires • 2 défaites',
    description: 'Puissant, stratégique et engagé, Mehdi se distingue par son timing, sa lecture du combat et son impact dans l\'échange.',
    palmares: ['Champion interrégional', 'Combattant de l\'année 2023', 'Vainqueur gala national'],
    accent: '#f59e0b',
    icon: 'trophy',
    active: true,
  },
  {
    name: 'Anna Martin',
    slug: 'anna-martin',
    photo: '/images/athletes/anna.png',
    discipline: 'Full Contact',
    level: 'Confirmé',
    record: '10 victoires • 1 défaite',
    description: 'Anna construit sa progression autour de la discipline, du mental et d\'un vrai socle technique, avec une implication constante.',
    palmares: ['Championne départementale', 'Médaillée nationale', 'Athlète espoir'],
    accent: '#ffffff',
    icon: 'shield',
    active: true,
  },
  {
    name: 'Karim Benali',
    slug: 'karim-benali',
    photo: '/images/athletes/karim.png',
    discipline: 'Kickboxing',
    level: 'Professionnel',
    record: '18 victoires • 2 défaites',
    description: 'Combattant explosif et technique, reconnu pour son engagement et sa régularité au plus haut niveau.',
    palmares: ['Champion de France', 'Vainqueur Open International', 'Athlète élite du club'],
    accent: '#ef4444',
    icon: 'flame',
    active: true,
  },
  {
    name: 'Yassine El Amrani',
    slug: 'yassine-el-amrani',
    photo: '/images/athletes/yassine.png',
    discipline: 'K1 Rules',
    level: 'Professionnel',
    record: '20 victoires • 4 défaites',
    description: 'Combattant spectaculaire et redoutable stratège, Yassine se distingue par sa puissance et sa précision en compétition.',
    palmares: ['Champion d\'Europe WKN', 'Vainqueur du Grand Prix International', 'Athlète professionnel du club'],
    accent: '#f59e0b',
    icon: 'trophy',
    active: true,
  },
  {
    name: 'Lorie Moreau',
    slug: 'lorie-moreau',
    photo: '/images/athletes/lorie.png',
    discipline: 'Low Kick',
    level: 'Élite',
    record: '14 victoires • 2 défaites',
    description: 'Athlète complète et déterminée, Lorie se démarque par son endurance, sa mobilité et son engagement dans le combat.',
    palmares: ['Championne nationale Low Kick', 'Vainqueure de la Coupe de France', 'Espoir international'],
    accent: '#f97316',
    icon: 'flame',
    active: true,
  },
  {
    name: 'Conde Moussa',
    slug: 'conde-moussa',
    photo: '/images/athletes/conde-moussa.png',
    discipline: 'Kickboxing',
    level: 'Semi-professionnel',
    record: '13 victoires • 5 défaites',
    description: 'Combattant aguerri en Kickboxing. Record: 13 victoires • 5 défaites',
    palmares: ['champion de France', 'champion régional', 'et champion de WKN amateur'],
    accent: '#ef4444',
    icon: 'flame',
    active: true,
  },
  {
    name: 'Ozmanyan Rustam',
    slug: 'ozmanyan-rustam',
    photo: '/images/athletes/ozmanyan-rustam.png',
    discipline: 'Kickboxing',
    level: 'Professionnel',
    record: '20 victoires • 6 défaites',
    description: 'Combattant aguerri en Kickboxing. Record: 20 victoires • 6 défaites',
    palmares: ['Compétiteur de Kickboxing'],
    accent: '#f59e0b',
    icon: 'trophy',
    active: true,
  },
  {
    name: 'Raed Saadi Ali',
    slug: 'raed-saadi-ali',
    photo: '/images/athletes/raed-saadi-ali.png',
    discipline: 'Kickboxing',
    level: 'Avancé',
    record: '22 victoires • 10 défaites',
    description: 'Combattant aguerri en Kickboxing. Record: 22 victoires • 10 défaites',
    palmares: ['Compétiteur de Kickboxing'],
    accent: '#ffffff',
    icon: 'shield',
    active: true,
  },
  {
    name: 'Raed Saadi Hayder',
    slug: 'raed-saadi-hayder',
    photo: '/images/athletes/raed-saadi-hayder.png',
    discipline: 'Kickboxing',
    level: 'Professionnel',
    record: '19 victoires • 5 défaites',
    description: 'Combattant aguerri en Kickboxing. Record: 19 victoires • 5 défaites',
    palmares: ['champion de France 2025'],
    accent: '#f97316',
    icon: 'flame',
    active: true,
  },
  {
    name: 'Singh Balraj',
    slug: 'singh-balraj',
    photo: '/images/athletes/singh-balraj.png',
    discipline: 'Full Contact',
    level: 'Confirmé',
    record: '14 victoires • 9 défaites',
    description: 'Combattant aguerri en Full Contact. Record: 14 victoires • 9 défaites',
    palmares: ['champion de France full 2026/ champion open iska 2026'],
    accent: '#3b82f6',
    icon: 'shield',
    active: true,
  },
  {
    name: 'Svay Anthony',
    slug: 'svay-anthony',
    photo: '/images/athletes/svay-anthony.png',
    discipline: 'Kickboxing',
    level: 'Professionnel',
    record: '26 victoires • 7 défaites',
    description: 'Combattant aguerri en Kickboxing. Record: 26 victoires • 7 défaites',
    palmares: ['champion France 2014'],
    accent: '#8b5cf6',
    icon: 'flame',
    active: true,
  },
  {
    name: 'Ulmann Jefferson',
    slug: 'ulmann-jefferson',
    photo: '/images/athletes/ulmann-jefferson.png',
    discipline: 'Kickboxing',
    level: 'Professionnel',
    record: '23 victoires • 4 défaites',
    description: 'Combattant aguerri en Kickboxing. Record: 23 victoires • 4 défaites',
    palmares: ['1x champion France kick 2026'],
    accent: '#ec4899',
    icon: 'trophy',
    active: true,
  },
];

async function seedAthletes() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing athletes
    await Athlete.deleteMany({});
    console.log('🗑️  Cleared existing athletes');

    // Insert all athletes
    const result = await Athlete.insertMany(athletes);
    console.log(`✅ Added ${result.length} athletes to MongoDB\n`);

    athletes.forEach((athlete) => {
      console.log(`  ✓ ${athlete.name}`);
    });

    console.log('\n✅ Database seed completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

seedAthletes();
