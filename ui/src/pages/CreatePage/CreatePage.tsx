import React from 'react';
import Layout from '../../layout/Layout';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import ImageUpload from '../../components/input/ImageUpload';

const CreatePage = () => {
  return (
    <Layout>
      <div className="max-w-[1150px] mt-20 mx-auto">
        <h1 className="text-3xl font-semibold">Create your campaign</h1>
        <div className="mt-10 w-full bg-input py-10 px-5">
          <div className="grid grid-cols-12 gap-5">
            <div className=" col-span-6">
              <Input required placeholder="Eg: Suraj Giri" label="Full Name" />
            </div>
            <div className=" col-span-6">
              <Input
                required
                placeholder="Eg: Fund For This School"
                label="Campaign Title"
              />
            </div>
            <div className=" col-span-6">
              <Input
                type="number"
                required
                placeholder="Eg: 5.222"
                label="Goal Amount"
              />
            </div>
            <div className="col-span-12">
              <Input
                description
                required
                placeholder="Tell people why you need this fund. Write short description so that people know your motive towards the fund"
                label="Description"
              />
            </div>
            <div className="col-span-12">
              <ImageUpload />
            </div>
          </div>
          <div className="mt-6">
            <Button variant="primary">Submit Campaign</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePage;
