import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function connectDB() {
	if (mongoose.connection.readyState === 0) {
		await mongoose.connect(
			'mongodb+srv://dhavalpparmar02:UuNiBQCDqweV58XI@mehndi.sxeg5bo.mongodb.net/svelte-two-factor-verification?retryWrites=true&w=majority&appName=ClusterTest'
		);
		console.log('MongoDB connected');
	}
}
