import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Update Wine Tasting event
  await prisma.event.update({
    where: { slug: 'wine-tasting-tuscany' },
    data: {
      images: [
      "https://i.pinimg.com/736x/5d/09/49/5d0949ec57cd170a57ccdf0cec883adc.jpg",
      "https://i.pinimg.com/736x/ad/10/14/ad101499e074b15d605d422b47b0f07e.jpg",
      "https://i.pinimg.com/1200x/7c/0c/f2/7c0cf209dd721ee2910fca0d2dd948e3.jpg"
      ]
    }
  });
  
  await prisma.event.update({
    where: { slug: 'pasta-making-masterclass' },
    data: {
      images: [
      "https://i.pinimg.com/736x/40/a9/79/40a97975515355dbd31414342fad0551.jpg",
      "https://i.pinimg.com/736x/71/36/eb/7136eb9da7a8994cf7e9a72fb14b8f2d.jpg",
      "https://i.pinimg.com/1200x/16/37/51/163751e53c4f337b50b0eb9694181ef2.jpg"
      ]
    }
  });

    await prisma.event.update({
    where: { slug: 'christmas-feast' },
    data: {
      images: [
      "https://i.pinimg.com/736x/b8/8a/e3/b88ae3d84b8e6ab6a9e48d1d7ec6ca03.jpg",
      "https://i.pinimg.com/1200x/5d/14/91/5d1491a24c8196b0769937b00bd86e5d.jpg",
      "https://i.pinimg.com/1200x/73/0a/a3/730aa3928989fc1eb7190b9c6d9696f2.jpg"
      ]
    }
  });

    await prisma.event.update({
    where: { slug: 'truffle-dinner' },
    data: {
      images: [
      "https://i.pinimg.com/736x/47/6f/03/476f03fc95aef01ed4d325a7a268b326.jpg",
      "https://i.pinimg.com/1200x/c2/77/79/c27779e635f81dfb4e8616f2b6fd938e.jpg",
      "https://i.pinimg.com/736x/08/31/ab/0831ab19fc584c959fd5f3c65295b9a4.jpg"
      ]
    }
  });

    await prisma.event.update({
    where: { slug: 'italian-street-food' },
    data: {
      images: [
      "https://i.pinimg.com/1200x/2b/f1/a7/2bf1a72cfc7751189e7e53bdbbdcd1cb.jpg",
      "https://i.pinimg.com/1200x/8b/51/e6/8b51e6e5b768cc4e0de632f50f12502e.jpg",
      "https://i.pinimg.com/736x/f8/ad/7f/f8ad7f7e36cfd2862ef35f836bff33e5.jpg"
      ]
    }
  });

    await prisma.event.update({
    where: { slug: 'valentines-dinner' },
    data: {
      images: [
      "https://i.pinimg.com/736x/f3/7e/e2/f37ee2e13dee690aeac94a13c20cb197.jpg",
      "https://i.pinimg.com/1200x/69/04/2d/69042da0fa206eb5c96ddc1f50c4a541.jpg",
      "https://i.pinimg.com/736x/7c/15/bf/7c15bfad4d44b1775ccc71cd2cf25899.jpg"
      ]
    }
  });
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });