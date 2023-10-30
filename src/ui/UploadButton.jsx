import { BsUpload } from 'react-icons/bs';
import { Link } from 'react-router-dom';
function UploadButton() {
  function handleClick() {
    <Link to="upload" />;
  }
  return (
    <div className="flex gap-1 pt-4">
      <BsUpload size={'2em'} className="cursor-pointer" onClick={handleClick} />

      <p className="text-center">Upload</p>
    </div>
  );
}

export default UploadButton;
