#!/usr/bin/env node

import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.join(__dirname, '..', '.env');

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    if (line && !line.startsWith('#')) {
      const [key, ...valueParts] = line.split('=');
      const value = valueParts.join('=').trim().replace(/^["']|["']$/g, '');
      if (key && key.trim()) {
        process.env[key.trim()] = value;
      }
    }
  });
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not set in .env');
  process.exit(1);
}

const AthleteSchema = new mongoose.Schema(
  {
    name: String,
    slug: String,
    photo: String,
    age: Number,
    weight: Number,
    category: String,
    discipline: String,
    club: String,
    palmares: [String],
    description: String,
    active: { type: Boolean, default: true },
    record: String,
    level: String,
    accent: String,
    icon: String,
  },
  { timestamps: true }
);

const Athlete = mongoose.model('Athlete', AthleteSchema);

const athletes = [
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
    imagePosition: '50% 45%',
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
    imagePosition: '50% 40%',
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
    imagePosition: '30% 35%',
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
    imagePosition: '70% 35%',
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
    imagePosition: '35% 35%',
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
    imagePosition: '50% 30%',
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
    imagePosition: '50% 40%',
    active: true,
  },
];

async function seedAthletes() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Clear existing athletes
    await Athlete.deleteMany({});
    console.log('🗑️  Cleared existing athletes\n');

    // Insert all athletes
    const result = await Athlete.insertMany(athletes);
    console.log(`✅ Added ${result.length} athletes to MongoDB\n`);

    athletes.forEach((athlete) => {
      console.log(`  ✓ ${athlete.name}`);
    });

    console.log('\n✅ Database seed completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error.message);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

seedAthletes();
