import Input from "../../../components/Input";
import Button from "../../../components/Button";

const Step1 = ({ onNext }) => {
  return (
    <>
      <div className="flex flex-col gap-1 mt-10">
        <label>아이디</label>
        <Input placeholder="사용하실 아이디를 입력해주세요" />
      </div>
      <div className="flex flex-col gap-1 mt-10">
        <label>비밀번호</label>
        <Input placeholder="비밀번호를 입력해주세요" />
      </div>
      <div className="flex flex-col gap-1 mt-5">
        <label>비밀번호 확인</label>
        <Input placeholder="비밀번호를 다시 입력해주세요" />
      </div>
      <Button
        className="mt-[136px] flex bg-[#FF8C2E] text-white"
        text="다음"
        onClick={onNext}
      />
    </>
  );
};

export default Step1;
