const prisma = require('./db');

async function main() {
    // 1. Get all rows of data from the users table
    const allUsers = await prisma.user.findMany();
    console.log('All Users:', allUsers);

    // 2. Get all posts that belong to the user with ID 2
    const userPosts = await prisma.post.findMany({
        where: { userId: 2 }
    });
    console.log('Posts by User with ID 2:', userPosts);

    // 3. Get the user with ID 1 and include their profile in the response
    const userWithProfile = await prisma.user.findUnique({
        where: { id: 1 },
        include: { profile: true }
    });
    console.log('User with ID 1 and their profile:', userWithProfile);

    // 4. Update the post with ID 1 so that its content is different
    const updatedPost = await prisma.post.update({
        where: { id: 1 },
        data: { content: 'Updated content for post 1 by licemartin' }
    });
    console.log('Updated Post with ID 1:', updatedPost);

    // 5. Delete the post with ID 3
    const deletedPost = await prisma.post.delete({
        where: { id: 3 }
    });
    console.log('Deleted Post with ID 3:', deletedPost);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
