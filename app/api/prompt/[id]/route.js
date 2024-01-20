import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async(request, { params }) => {
    try {
        await connectToDB();
        const existingPrompt = await Prompt.findById(params.id);

        return new Response(JSON.stringify(existingPrompt), { status:200 });
    } catch (error) {
        console.log(error)
        return new Response('Failed to get prompt with that id', { status: 500 });
    }
};

export const PATCH = async(request, { params }) => {
    const { prompt, tag } = await request.json();
    try {
        await connectToDB();
        const existingPrompt = await Prompt.findByIdAndUpdate(params.id);

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        
        await existingPrompt.save()
        return new Response('Update successfully', { status:200 });
    } catch (error) {
        return new Response('Failed to update prompt with that id', { status: 500 });
    }
}

export const DELETE = async(request, { params }) => {
    try {
        await connectToDB();
        await Prompt.findByIdAndDelete(params.id);

        console.log('Successfully deleted')
        return new Response('Prompt deleted successfully', { status:200 });
    } catch (error) {
        console.log(error)
        return new Response('Failed to delete prompt with that id', { status: 500 });
    }
}