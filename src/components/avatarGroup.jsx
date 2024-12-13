// import React from 'react';
// import { Avatar,AvatarGroup,Breadcrumbs } from '@cloudwick/astral-ui';
// import image from "../assets/jpg.jpg";


// const AvatarGroupShowcase = () => {
//   const handleClick = () => {
//     alert('Avatar Group Clicked!');
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">

//       <h1 className="text-3xl font-bold text-center mb-6">Avatar Component Showcase</h1>


//           <div className=" flex items-center justify-center gap-3 border p-9 mb-5">
//             <Avatar label="SM" size="sm" />
//             <Avatar label="MD" size="md" />
//             <Avatar label="LG" size="lg" />
//             <Avatar
//               label="XL"
//               size="xl"
//               img={image}
//               className="content-center"
//             />
//           </div>



// <h1 className='text-3xl  font-semibold mb-4'> This the AvartarGroup component </h1>
// <div className=' border p-4'>
      
//       {/* Basic Avatar Group */} 
//       <h2 className="text-2xl font-semibold mb-4">Basic Avatar Group</h2>
//       <AvatarGroup maxItems={4} size="md">
//         <Avatar label="John Doe" img="https://via.placeholder.com/150" />
//         <Avatar label="Jane Doe" img="https://via.placeholder.com/150" />
//         <Avatar label="Mark Smith" img="https://via.placeholder.com/150" />
//         <Avatar label="Lucy Heart" img="https://via.placeholder.com/150" />
//         <Avatar label="Extra Person" img="https://via.placeholder.com/150" />
//       </AvatarGroup>

//       {/* Avatar Group with click handler */}
//       <h2 className="text-2xl font-semibold mb-4 mt-8">Avatar Group with Click Handler</h2>
//       <AvatarGroup maxItems={3} size="lg" onClick={handleClick}>
//         <Avatar label="John Wick" img="https://via.placeholder.com/150" />
//         <Avatar label="Ellen Ripley" img="https://via.placeholder.com/150" />
//         <Avatar label="Bruce Wayne" img="https://via.placeholder.com/150" />
//         <Avatar label="Clark Kent" img="https://via.placeholder.com/150" />
//       </AvatarGroup>

//       {/* Custom size Avatar Group */}
//       <h2 className="text-2xl font-semibold mb-4 mt-8">Avatar Group with Custom Size</h2>
//       <AvatarGroup maxItems={5} size="sm">
//         <Avatar label="Thor Odinson" img="https://via.placeholder.com/150" />
//         <Avatar label="Tony Stark" img="https://via.placeholder.com/150" />
//         <Avatar label="Natasha Romanoff" img="https://via.placeholder.com/150" />
//         <Avatar label="Bruce Banner" img="https://via.placeholder.com/150" />
//         <Avatar label="Steve Rogers" img="https://via.placeholder.com/150" />
//         <Avatar label="Wanda Maximoff" img="https://via.placeholder.com/150" />
//       </AvatarGroup>

//       {/* Large Avatar Group */}
//       <h2 className="text-2xl font-semibold mb-4 mt-8">Large Avatar Group</h2>
//       <AvatarGroup maxItems={6} size="xl">
//         <Avatar label="Iron Man" img="https://via.placeholder.com/150" />
//         <Avatar label="Captain America" img="https://via.placeholder.com/150" />
//         <Avatar label="Black Widow" img="https://via.placeholder.com/150" />
//         <Avatar label="Hawkeye" img="https://via.placeholder.com/150" />
//         <Avatar label="Black Panther" img="https://via.placeholder.com/150" />
//         <Avatar label="Doctor Strange" img="https://via.placeholder.com/150" />
//         <Avatar label="Spider-Man" img="https://via.placeholder.com/150" />
//       </AvatarGroup>

//       {/* Avatar Group with Images */}
//       <h2 className="text-2xl font-semibold mb-4 mt-8">Avatar Group with Images</h2>
//       <AvatarGroup maxItems={10} size="md">
//         {Array.from({ length: 20 }).map((_, index) => (
//           <Avatar key={index} label={`Person ${index + 1}`} img={`https://picsum.photos/id/${index + 10}/200/300`} />
//         ))}
//       </AvatarGroup>

//       {/* Avatar Group with Large Number of Avatars */}
//       <h2 className="text-2xl font-semibold mb-4 mt-8">Avatar Group with Large Number of Avatars</h2>
//       <AvatarGroup maxItems={10} size="md">
//         {Array.from({ length: 100 }).map((_, index) => {
//           const avatar = (
//             <Avatar 
//               key={index} 
//               label={`Person ${index + 1}`} 
//               img={`https://picsum.photos/id/${index + 30}/200/300`} 
//             />
//           );
//           return avatar ? avatar : null;
//         })}
//       </AvatarGroup>
//       </div>
//     </div>
//   );
// };

// export default AvatarGroupShowcase;
