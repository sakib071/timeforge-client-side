import { Badge, Progress } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar, Divider, Tooltip } from "antd";
const Card = () => {
  return (
    <div>
      <p className=" text-[20px] md:text-[25px] lg:text-[32px] font-[600] font-inter text-center  mx-auto">
        <span className="text-indigo-700  ">TimeForge</span> delivers
        exceptional service <br />
        to companies all around the world
      </p>
      <div className=" my-[35px] p-[20px] bg-gradient-to-r from-violet-400 via-violet-600 to-indigo-600">
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-4  pl-[35px]  md:pl-[50px] md:pr-[10px] lg:pl-[12px]">

          {/* 1st card */}
          <div className="overflow-hidden rounded-lg has-shadow w-80 p-4 flex flex-col gap-1 border-[1px] bg-white">
            <div className="flex justify-between items-baseline">
              <h3 className="text-[16px] font-semibold font-inter text-slate-400">
                Jan 26, 2024
              </h3>
            </div>
            <div className="text-[20px] font-poppins font-[600] ">
              <p>Team Collaboration</p>
            </div>
            <div className="text-[16px] font-poppins font-[300] ">
              <p>Engaging teamwork</p>
            </div>
            <div>
              <Progress percent={50} status="active" />
            </div>

            <div >
            <Divider  />
            </div>
            <Badge.Ribbon text="25 days left" color="cyan">
              <div className="flex justify-between items-center">
                <Avatar.Group
                  maxCount={2}
                  maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
                >
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
                  <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                  <Tooltip title="Ant User" placement="top">
                    <Avatar
                      style={{ backgroundColor: "#87d068" }}
                      icon={<UserOutlined />}
                    />
                  </Tooltip>
                  <Avatar
                    style={{ backgroundColor: "#1677ff" }}
                    icon={<AntDesignOutlined />}
                  />
                </Avatar.Group>
              </div>
              <div className="text-[20px] font-poppins font-[600] ">
                <p>Team Collaboration</p>
              </div>
              <div className="text-[16px] font-poppins font-[300] ">
                <p>Engaging teamwork</p>
              </div>
              <div>
                <Progress percent={50} status="active" />
              </div>

              <div>
                <Divider />
              </div>
              <Badge.Ribbon text="25 days left" color="cyan">
                <div className="flex items-center justify-between">
                  <Avatar.Group
                    maxCount={2}
                    maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
                    <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                    <Tooltip title="Ant User" placement="top">
                      <Avatar
                        style={{ backgroundColor: "#87d068" }}
                        icon={<UserOutlined />}
                      />
                    </Tooltip>
                    <Avatar
                      style={{ backgroundColor: "#1677ff" }}
                      icon={<AntDesignOutlined />}
                    />
                  </Avatar.Group>
                </div>
              </Badge.Ribbon>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
