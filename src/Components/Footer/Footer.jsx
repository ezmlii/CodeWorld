import codeWorldLogo from '../../assets/Images/codeworld-logo.svg';
import linkedIn from '../../assets/icons/linkedIn.svg';
import instagram from '../../assets/icons/instagram.svg';
import facebook from '../../assets/icons/facebook.svg';

const Footer = () => {
  return (
    <footer className="bg-[#002b45] text-[#FFFFFF] py-[37px] px-[30px] mt-[90px]">
      <div className="flex flex-col sm:flex-row sm:justify-between lg:flex-row lg:justify-between max-w-[306px] sm:max-w-[682px] lg:max-w-[1200px] mx-auto gap-[70px]">
        <div className="flex flex-col mb-8">
          <img 
            src={codeWorldLogo} 
            alt="codeworld" 
            className="mb-4 filter brightness-0 invert w-[306px] h-[54px]"  
          />
          <div>
            <h3 className="mb-3 font-poppins text-[24px]">İxtisaslar</h3>
            <div className="flex flex-wrap gap-[20px] font-opensans text-[16px] sm:text-[20px] max-w-[282px]">
              <div>Qrafik Dizayn</div>
              <div>UX/UI Dizayn</div>
              <div>Frontend</div>
              <div>Backend</div>
              <div>Data Analitika</div>
              <div>QA</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          <div className='flex gap-[30px]'>
            <img src={linkedIn} alt="linkedin" />
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
          </div>
          <div>
            <h3 className="font-semibold mb-3 font-poppins text-[24px]">Digər</h3>
            <div className="grid grid-cols-1 gap-2 text-sm font-opensans text-[16px] sm:text-[20px]">
              <div>Məxfilik</div>
              <div>Bizimlə əlaqə</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;