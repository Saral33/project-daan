import React, { useState } from 'react';
import Layout from '../../layout/Layout';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import ImageUpload from '../../components/input/ImageUpload';
import useCampaign from '../../hooks/useCampaignHooks';
import { ethers } from 'ethers';
import DialogModal from '../../components/dialog/Dialog';
import toast from 'react-hot-toast';
import LoadingDialog from '../../components/dialog/LoadingDialog';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const CreatePage = () => {
  const { address, connect, createCampaign } = useCampaign();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    title: '',
    description: '',
    goal: '',
    image: '',
    deadline: new Date()
  });
  const [loading, setLoading] = useState(false);
  const handleFormFieldChange = (fieldName: string, e: any) => {
    if(fieldName == "deadline"){
      setForm({ ...form, [fieldName]: e });
    } else {
      setForm({ ...form, [fieldName]: e.target.value });
    }
  };
  const navigate = useNavigate();
  const submitHandler = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (window.ethereum?.isMetaMask) {
      connect().then((res) =>
        createCampaign({
          args: [
            address,
            form.fullName,
            form.title,
            form.description,
            ethers.utils.parseUnits(form.goal, 18),
            form.deadline.getTime()/1000, // In seconds
            form.image,
          ],
        })
          .then((res) => {
            setLoading(false);

            toast.success('Successfully Created Campaign');
            navigate('/');
          })
          .catch((err: any) => {
            setLoading(false);
            toast.error(err?.reason || 'Internal server error. Contact Admin');
          })
      );
    } else {
      setOpen(true);
    }
  };

  return (
    <Layout>
      <LoadingDialog
        open={loading}
        message="Your operation is being processed"
      />
      <DialogModal
        btnAction={() => window.open('https://metamask.io/download/', '_blank')}
        open={open}
        setOpen={setOpen}
        title="Metamask Needed"
        message="You need to install metamask in order to use this feature. Please install metamask and try again"
      />
      {/* <DialogModal /> */}
      <div className="max-w-[1150px] mt-20 mx-auto">
        <h1 className="text-3xl font-semibold">Create your campaign</h1>
        <div className="mt-10 w-full bg-input py-10 px-5">
          <form onSubmit={submitHandler}>
            <div className="grid grid-cols-12 gap-5">
              <div className=" col-span-6">
                <Input
                  value={form.fullName}
                  required
                  placeholder="Eg: Suraj Giri"
                  label="Full Name"
                  onChange={(e) => handleFormFieldChange('fullName', e)}
                />
              </div>
              <div className=" col-span-6">
                <Input
                  value={form.title}
                  required
                  placeholder="Eg: Fund For This School"
                  label="Campaign Title"
                  onChange={(e) => handleFormFieldChange('title', e)}
                />
              </div>
              <div className=" col-span-6">
                <Input
                  value={form.goal}
                  type="number"
                  required
                  placeholder="Eg: 5.222"
                  label="Goal Amount"
                  onChange={(e) => handleFormFieldChange('goal', e)}
                />
              </div>
              <div className=" col-span-6">
                <Input
                  value={form.image}
                  required
                  placeholder="Eg: https://unsplash.com/images/123"
                  label="Image Url"
                  onChange={(e) => handleFormFieldChange('image', e)}
                />
              </div>
              <div className="col-span-12">
                <Input
                  value={form.description}
                  description
                  required
                  placeholder="Tell people why you need this fund. Write a short description so that people know your motive towards the fund."
                  label="Description"
                  onChange={(e) => handleFormFieldChange('description', e)}
                />
              </div>
              <div className="col-span-6">
              <label className="flex ">
                <span>Deadline*</span>{' '}
              </label>
                <DatePicker
                 onChange={(date) => handleFormFieldChange('deadline', date)} 
                 value={form.deadline}
                 minDate={new Date()}
                 />
              </div>
              {/* <div className="col-span-12">
                <ImageUpload />
              </div> */}
            </div>
            <div className="mt-6">
              <Button type="submit" variant="primary">
                Submit Campaign
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePage;
