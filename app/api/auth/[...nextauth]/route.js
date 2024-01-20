import { connectToDB } from "@utils/database";
import NextAuth from "next-auth/next";
import User from "@models/user";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({ email: session.user.email })
            session.user.id = sessionUser._id

            return session;
        },
        async signIn({ profile }) {
            try {
                await connectToDB();
                const existingUser = await User.findOne({ email: profile.email }).maxTimeMS(20000);
                if(!existingUser){
                    await User.create({
                        email: profile.email,
                        userName: profile.name,
                        image: profile.picture
                    })
                }
                return true;
            } catch (error) {
                console.log(error)
            }
        }
    }
});

export { handler as POST, handler as GET}