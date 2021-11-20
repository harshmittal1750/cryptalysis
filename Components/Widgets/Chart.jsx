import React from "react";

import { Dimensions, View, Text, StyleSheet } from "react-native";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartXLabel,
  ChartYLabel,
  useChartData,
  monotoneCubicInterpolation,
} from "@rainbow-me/animated-charts";

export const { width } = Dimensions.get("window");
export const data = [
  {
    x: 1625261034,
    y: 33508.022591394816,
  },
  {
    x: 1625264634,
    y: 33451.868571618266,
  },
  {
    x: 1625268234,
    y: 33352.778189967095,
  },
  {
    x: 1625271834,
    y: 33222.90314028234,
  },
  {
    x: 1625275434,
    y: 33565.74294408047,
  },
  {
    x: 1625279034,
    y: 33788.207267828875,
  },
  {
    x: 1625282634,
    y: 33950.786555181,
  },
  {
    x: 1625286234,
    y: 33618.90832309571,
  },
  {
    x: 1625289834,
    y: 33751.75278134206,
  },
  {
    x: 1625293434,
    y: 33581.44544067873,
  },
  {
    x: 1625297034,
    y: 33497.64409129388,
  },
  {
    x: 1625300634,
    y: 33727.97644657156,
  },
  {
    x: 1625304234,
    y: 33842.00201438948,
  },
  {
    x: 1625307834,
    y: 33773.94842765463,
  },
  {
    x: 1625311434,
    y: 34709.623241901405,
  },
  {
    x: 1625315034,
    y: 34590.19922765555,
  },
  {
    x: 1625318634,
    y: 34724.597477326126,
  },
  {
    x: 1625322234,
    y: 34735.59165129194,
  },
  {
    x: 1625325834,
    y: 34576.604333197116,
  },
  {
    x: 1625329434,
    y: 34586.80902797814,
  },
  {
    x: 1625333034,
    y: 34684.616808993145,
  },
  {
    x: 1625336634,
    y: 34707.61033211985,
  },
  {
    x: 1625340234,
    y: 34662.14874661304,
  },
  {
    x: 1625343834,
    y: 34609.25659278278,
  },
  {
    x: 1625347434,
    y: 34915.17322079939,
  },
  {
    x: 1625351034,
    y: 34806.968157146846,
  },
  {
    x: 1625354634,
    y: 34835.22621932793,
  },
  {
    x: 1625358234,
    y: 34730.10120639357,
  },
  {
    x: 1625361834,
    y: 34767.479405793325,
  },
  {
    x: 1625365434,
    y: 34603.24157697668,
  },
  {
    x: 1625369034,
    y: 34788.71456063152,
  },
  {
    x: 1625372634,
    y: 34585.90931503368,
  },
  {
    x: 1625376234,
    y: 34564.75484158307,
  },
  {
    x: 1625379834,
    y: 34684.75920877884,
  },
  {
    x: 1625383434,
    y: 34739.01604939745,
  },
  {
    x: 1625387034,
    y: 34871.277260216506,
  },
  {
    x: 1625390634,
    y: 35296.376752617434,
  },
  {
    x: 1625394234,
    y: 35467.05118350059,
  },
  {
    x: 1625397834,
    y: 35648.67791404248,
  },
  {
    x: 1625401434,
    y: 35553.16363015171,
  },
  {
    x: 1625405034,
    y: 35485.05781259262,
  },
  {
    x: 1625408634,
    y: 35639.36120345087,
  },
  {
    x: 1625412234,
    y: 35571.29082003906,
  },
  {
    x: 1625415834,
    y: 35373.68289566881,
  },
  {
    x: 1625419434,
    y: 35401.36321566243,
  },
  {
    x: 1625423034,
    y: 35524.39807062176,
  },
  {
    x: 1625426634,
    y: 35553.360860593115,
  },
  {
    x: 1625430234,
    y: 35522.40090440637,
  },
  {
    x: 1625433834,
    y: 35629.66171614543,
  },
  {
    x: 1625437434,
    y: 35529.54218824365,
  },
  {
    x: 1625441034,
    y: 35612.53283446984,
  },
  {
    x: 1625444634,
    y: 35600.20229625395,
  },
  {
    x: 1625448234,
    y: 35999.840043982294,
  },
  {
    x: 1625451834,
    y: 35440.42932063159,
  },
  {
    x: 1625455434,
    y: 35394.213074080915,
  },
  {
    x: 1625459034,
    y: 34882.543478932406,
  },
  {
    x: 1625462634,
    y: 34663.247441442414,
  },
  {
    x: 1625466234,
    y: 34503.103353179045,
  },
  {
    x: 1625469834,
    y: 34448.765581624386,
  },
  {
    x: 1625473434,
    y: 34427.37744031433,
  },
  {
    x: 1625477034,
    y: 34458.114413220814,
  },
  {
    x: 1625480634,
    y: 34276.55210912972,
  },
  {
    x: 1625484234,
    y: 34353.7157616358,
  },
  {
    x: 1625487834,
    y: 34342.5979106518,
  },
  {
    x: 1625491434,
    y: 34284.64387726923,
  },
  {
    x: 1625495034,
    y: 34627.230160432715,
  },
  {
    x: 1625498634,
    y: 33592.64403291537,
  },
  {
    x: 1625502234,
    y: 33591.27461754929,
  },
  {
    x: 1625505834,
    y: 33790.6756307786,
  },
  {
    x: 1625509434,
    y: 33813.31640587756,
  },
  {
    x: 1625513034,
    y: 33739.836862750366,
  },
  {
    x: 1625516634,
    y: 33770.37917190871,
  },
  {
    x: 1625520234,
    y: 33477.87078436605,
  },
  {
    x: 1625523834,
    y: 34067.43520487007,
  },
  {
    x: 1625527434,
    y: 34206.73355918745,
  },
  {
    x: 1625531034,
    y: 33918.94154661249,
  },
  {
    x: 1625534634,
    y: 34260.79658188397,
  },
  {
    x: 1625538234,
    y: 34170.772857664364,
  },
  {
    x: 1625541834,
    y: 33906.62831880534,
  },
  {
    x: 1625545434,
    y: 34174.293872955815,
  },
  {
    x: 1625549034,
    y: 33931.35630483817,
  },
  {
    x: 1625552634,
    y: 33894.44480782372,
  },
  {
    x: 1625556234,
    y: 33977.38412642491,
  },
  {
    x: 1625559834,
    y: 34786.54231087485,
  },
  {
    x: 1625563434,
    y: 34775.81079992952,
  },
  {
    x: 1625567034,
    y: 34745.49264368812,
  },
  {
    x: 1625570634,
    y: 34900.861527654546,
  },
  {
    x: 1625574234,
    y: 34981.755700304995,
  },
  {
    x: 1625577834,
    y: 34252.69756367186,
  },
  {
    x: 1625581434,
    y: 33905.09483692346,
  },
  {
    x: 1625585034,
    y: 34250.26120053002,
  },
  {
    x: 1625588634,
    y: 34441.15813165867,
  },
  {
    x: 1625592234,
    y: 34213.45679706546,
  },
  {
    x: 1625595834,
    y: 34106.339778535235,
  },
  {
    x: 1625599434,
    y: 34106.339778535235,
  },
  {
    x: 1625603034,
    y: 34103.39470165232,
  },
  {
    x: 1625606634,
    y: 33920.41248802911,
  },
  {
    x: 1625610234,
    y: 33974.87984752122,
  },
  {
    x: 1625613834,
    y: 33894.72303936846,
  },
  {
    x: 1625617434,
    y: 34104.92277881859,
  },
  {
    x: 1625621034,
    y: 33964.49028477387,
  },
  {
    x: 1625624634,
    y: 33790.483678277575,
  },
  {
    x: 1625628234,
    y: 34147.13658189322,
  },
  {
    x: 1625631834,
    y: 34197.818306808476,
  },
  {
    x: 1625635434,
    y: 34248.449807212055,
  },
  {
    x: 1625639034,
    y: 34250.679900532334,
  },
  {
    x: 1625642634,
    y: 34248.034666137275,
  },
  {
    x: 1625646234,
    y: 34480.42082446076,
  },
  {
    x: 1625649834,
    y: 34804.383892128855,
  },
  {
    x: 1625653434,
    y: 34860.18473257924,
  },
  {
    x: 1625657034,
    y: 34784.98195307826,
  },
  {
    x: 1625660634,
    y: 34856.88139556686,
  },
  {
    x: 1625664234,
    y: 34841.51512089575,
  },
  {
    x: 1625667834,
    y: 34770.3575058301,
  },
  {
    x: 1625671434,
    y: 34684.643576587696,
  },
  {
    x: 1625675034,
    y: 34896.269656399796,
  },
  {
    x: 1625678634,
    y: 34831.01671576413,
  },
  {
    x: 1625682234,
    y: 34856.45475172158,
  },
  {
    x: 1625685834,
    y: 34645.80896425257,
  },
  {
    x: 1625689434,
    y: 34596.44248175798,
  },
  {
    x: 1625693034,
    y: 34650.05072192917,
  },
  {
    x: 1625696634,
    y: 34676.646335962665,
  },
  {
    x: 1625700234,
    y: 34751.28066993535,
  },
  {
    x: 1625703834,
    y: 34721.14536269558,
  },
  {
    x: 1625707434,
    y: 34576.27480546994,
  },
  {
    x: 1625711034,
    y: 34270.507112535255,
  },
  {
    x: 1625714634,
    y: 34246.71829329822,
  },
  {
    x: 1625718234,
    y: 33932.25463831538,
  },
  {
    x: 1625721834,
    y: 33310.106010561845,
  },
  {
    x: 1625725434,
    y: 33421.0405519992,
  },
  {
    x: 1625729034,
    y: 33429.40807979073,
  },
  {
    x: 1625732634,
    y: 33422.371400838776,
  },
  {
    x: 1625736234,
    y: 33396.329549048816,
  },
  {
    x: 1625739834,
    y: 33263.62535890747,
  },
  {
    x: 1625743434,
    y: 33188.9181925909,
  },
  {
    x: 1625747034,
    y: 32419.56430894397,
  },
  {
    x: 1625750634,
    y: 32493.562752379046,
  },
  {
    x: 1625754234,
    y: 32699.65635776599,
  },
  {
    x: 1625757834,
    y: 32706.27479426995,
  },
  {
    x: 1625761434,
    y: 32701.63428183476,
  },
  {
    x: 1625765034,
    y: 32807.65716608694,
  },
  {
    x: 1625768634,
    y: 32487.443759663445,
  },
  {
    x: 1625772234,
    y: 32822.715189136456,
  },
  {
    x: 1625775834,
    y: 32925.97325481701,
  },
  {
    x: 1625779434,
    y: 32837.513862568485,
  },
  {
    x: 1625783034,
    y: 33059.5900735817,
  },
  {
    x: 1625786634,
    y: 32939.896208907354,
  },
  {
    x: 1625790234,
    y: 32998.30675802428,
  },
  {
    x: 1625793834,
    y: 32933.98079047916,
  },
  {
    x: 1625797434,
    y: 32855.18652079613,
  },
  {
    x: 1625801034,
    y: 32573.54933910897,
  },
  {
    x: 1625804634,
    y: 32933.578199292395,
  },
  {
    x: 1625808234,
    y: 32406.32880615089,
  },
  {
    x: 1625811834,
    y: 32670.376757618054,
  },
  {
    x: 1625815434,
    y: 33048.434511511616,
  },
  {
    x: 1625819034,
    y: 33007.32057450907,
  },
  {
    x: 1625822634,
    y: 33041.80213182875,
  },
  {
    x: 1625826234,
    y: 33056.560465627066,
  },
  {
    x: 1625829834,
    y: 32892.66090396394,
  },
  {
    x: 1625833434,
    y: 32956.07192096609,
  },
  {
    x: 1625837034,
    y: 32962.09679134582,
  },
  {
    x: 1625840634,
    y: 32998.3299460089,
  },
  {
    x: 1625844234,
    y: 32913.024272382674,
  },
  {
    x: 1625847834,
    y: 32881.88005976418,
  },
  {
    x: 1625851434,
    y: 33024.91694750846,
  },
  {
    x: 1625855034,
    y: 33455.248578698935,
  },
  {
    x: 1625858634,
    y: 33606.84483648143,
  },
  {
    x: 1625862234,
    y: 33695.0341522027,
  },
  {
    x: 1625865834,
    y: 33611.35489671841,
  },
];

const Chart = ({ chartArray }) => {
  const points = monotoneCubicInterpolation({ data: chartArray, range: 50 });

  const output = useChartData();

  // console.log(output);

  const getY = (value) => {
    "worklet";
    if (value === "") {
      return "---";
    }
    return `$ ${Number(value).toFixed(2)}`;
  };

  const getX = (value) => {
    "worklet";
    if (value === "") {
      return "---";
    }
    const date = new Date(Number(value * 1000));
    const s = date.getSeconds();
    const m = date.getMinutes();
    const h = date.getHours();
    const d = date.getDate();
    const n = date.getMonth();
    const y = date.getFullYear();
    return `${y}/${n}/${d} ${h}:${m}:${s}`;
  };

  return (
    <View style={{ marginHorizontal: 10 }}>
      <ChartPathProvider
        data={{
          points: points,
          nativePoints: points,
          smoothingStrategy: "bezier",
        }}>
        <ChartPath
          height={width / 2}
          stroke="#242424"
          width={width / 1.05}
          strokeWidth={2}
          selectedStrokeWidth={2}
          hitSlop={20}
        />
        <ChartDot style={styles.shadow} size={12} />

        <View style={styles.textDataStyle}>
          <Text style={{ fontWeight: "bold" }}>Time</Text>
          <Text style={{ fontWeight: "bold" }}>Price</Text>
        </View>

        <View style={styles.textDataStyle}>
          <ChartXLabel
            format={getX}
            style={{ color: "#242424", fontSize: 16 }}
          />
          <ChartYLabel
            format={getY}
            style={{ color: "#242424", fontSize: 16 }}
          />
        </View>
      </ChartPathProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: "black",
    shadowColor: "#242424",
    shadowOpacity: 0.5,
    elevation: 5,
  },
  textDataStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});

export default Chart;
