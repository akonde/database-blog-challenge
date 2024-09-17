const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdUsers = await prisma.user.createMany({
        data: [
            { username: 'licemartin' ,
                email:  'laicer@test.com',
                password: 'tteffroiruur56465h5',
                
            },
            { username: 'henrycool',
                email:  'henry@test.com',
                password: 'ttefvbgfbj356465h5',
              
             },
             { username: 'akonde',
                email:  'akondey@test.com',
                password: 'qvgjj6utf5h5',
              
             },
    
        ]
    });

    console.log(`${createdUsers.count} users created`, createdUsers);


    await prisma.profile.createMany({
        data: [
            { profilePictureUrl: 'https://icons8.com/photos/photo/621d1e9a92a9c10001651445' ,
                biography:  'Maecenas non lectus at dolor placerat cursus sit amet eu nisl. Sed .',
                userId: 1,
            },
            {  profilePictureUrl: 'https://icons8.com/photos/photo/621d278c92a9c1000165d488' ,
                biography:  'Mnon lectus at dolorat cursus sit amet eu nislat. Nam pretium vel justo at pells eleifend.',
                userId: 2,
             },
             {  profilePictureUrl: 'https://icons8.com/photos/photo/621d1e9a92a9c10001651447' ,
                biography:  'at dolor placerat cursus sit ametmet non mi. Vestibul Cras effic',
                userId: 3,
             },
    
        ]
    });

    await prisma.post.createMany({
        data: [
            {   userId: 1,
                title:  'This life',
                content:  'nas non lectus at dolor placerat cursus sit amet eu nisl. Sed rat cursus sit amet .',
                pictureUrl: 'https://icons8.com/photos/photo/621d1e9a92a9c10001651445' ,
                isPublished:  true
            },
    
            {   userId: 2,
                title:  'How to make money',
                content:  'ndolor placerat cursus sit amett amet hfger kfyr olrhht  .',
                isPublished:  true
            },

            {   userId: 3,
                title:  'All About Life',
                content:  'nas non lectus at dolor placerat cursus sit amet eu nisl. Sed rat cursus sit amet .',
                pictureUrl: 'https://icons8.com/photos/photo/621d1e9a92a9c10001651445' ,
                isPublished:  true
            }
        ]
    });


    for (let i = 1; i <= createdUsers.count; i++) {
        for (let u = 0; u < 2; u++) {
          await prisma.post.create({
            data: {
              userId: i,
              title: "Lorem ipsum dolor",
              content: "Dolorem ipsum this time",
              isPublished: true,
            },
          });
        }
      }
    
      await prisma.comment.createMany({
        data: [
          {
            userId: 2,
            postId: 1,
            content: "Lo as non lectus at dolor placerat crem ipsum",
          },
          {
            userId: 1,
            postId: 1,
            content: "Br as non lectus at dolor placerat cuh",
          },
          {
            userId: 1,
            postId: 3,
            content: "Lorem as non lectus at dolor placerat cipsum",
          },
          {
            userId: 3,
            postId: 4,
            content: "wLoremas non lectus at dolor placerat c ipsum",
          },
        ],
      });







    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })