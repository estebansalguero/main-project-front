export const Preview = ({ files }) => {
    if (!files.length) {
        return null;
    }; 

  return (
    <div>
      {files.map((file, index) => {
        return (
          <div key={index}>
            <img src={file.url} alt={file.name} />
          </div>
        )
      })}
    </div>
  );
};
