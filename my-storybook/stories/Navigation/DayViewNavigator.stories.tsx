import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DayViewNavigator } from "../../components/Navigation/DayViewNavigator"; 

const meta: Meta<typeof DayViewNavigator> = {
  tags: ['autodocs'],
  title: "Components/Navigation/DayViewNavigator",
  component: DayViewNavigator,
};

export default meta;
type Story = StoryObj<typeof DayViewNavigator>;

export const Default: Story = {
  render: () => {
    // Exemplo com controle do estado no story para demonstrar o onChange
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
      <div>
        <DayViewNavigator
          inicialdate={selectedDate}
          onChange={(date: Date) => setSelectedDate(date)}
        />
      </div>
    );
  },
};
