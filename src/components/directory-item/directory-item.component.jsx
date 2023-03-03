import { DirectoryItemContainer, DirBody } from "./directory-item.styles.jsx";

const DirectoryItem = ({ category: { imageUrl, title } }) => {
  return (
    <DirectoryItemContainer>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <DirBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
