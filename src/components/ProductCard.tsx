interface ProductCardProps {
  title: string;
  description: string;
  byline: string;
}

// const ProductCard: React.FC<ProductCardProps> = ({
//   title,
//   description,
//   byline,
// }) => {
//   return (
//     <div className="group flex flex-col justify-between rounded-lg border border-transparent px-5 py-4 transition-colors bg-buccaneer-200 bg-opacity-10 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
//       <a
//         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <h2 className={`mb-3 text-2xl font-semibold`}>{title} </h2>
//         <p className={`m-0 max-w-[30ch] text-sm opacity-80 text-buccaneer-200`}>
//           {description}
//         </p>
//       </a>
//       <p className="pt-3 text-xs text-center opacity-80 text-buccaneer-800">
//         {byline}
//       </p>
//     </div>
//   );
// };

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  byline,
}) => {
  return (
    <a
      href="/comingsoon"
      className="group flex flex-col justify-between rounded-lg border border-transparent px-5 py-4 transition-colors bg-buccaneer-200 bg-opacity-10 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>{title} </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-80 text-buccaneer-200`}>
        {description}
      </p>
      <p className="pt-3 text-xs text-center opacity-80 text-buccaneer-800">
        {byline}
      </p>
    </a>
  );
};

export default ProductCard;
