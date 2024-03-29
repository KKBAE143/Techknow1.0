Project Title: Spine Health and Foot Pressure Monitoring System**

Team Name: FutureTech

Team Members - Pilli Karthik
             - Vidyadhar

Event: Hackathon by Knowvation Learnings

Date: March 28th and 29th, 2024

Venue: Draper Startup House, Hyderabad


https://github.com/KKBAE143/Techknow1.0/assets/117244354/71266602-0b79-49e6-a8da-6820d99d46ed

Live Preview - https://kkbae143.github.io/Techknow1.0/

Description:

Our project, titled "Health Monitoring of Spine and Foot Pressure Monitoring System," addresses the critical issue of spinal misalignment and its impact on overall well-being. Spinal misalignment, often leading to disc degeneration and structural support issues, is a prevalent yet under-addressed health concern. Existing evaluation methods are complex, costly, and often involve radiation exposure, limiting their accessibility and usability.

In response to these challenges, our project proposes a comprehensive solution. We aim to develop a health monitoring device that integrates posture sensors attached to the spine and force sensors incorporated into shoes. By analyzing wear patterns on shoe soles, our device can provide insights into spine alignment in a non-invasive and user-friendly manner. 

Key features of our solution include:

1. Posture Sensors and Force Sensors: Attached to the spine and integrated into shoes respectively, enabling continuous monitoring of spinal alignment and foot pressure distribution.

2. Cloud-Based Storage and Analysis: Reports generated by the device are stored securely in the cloud and analyzed periodically, providing users with insights and progress updates on spinal alignment.

3. Spine Brace Bands with Sensors: Concentrating on specific regions of the spine, these bands enhance the accuracy of alignment monitoring.

4. Secure Data Transmission to Microsoft Azure: Utilizing Microsoft Azure ensures secure and reliable data transmission for analysis.

5. Mobile Display Output: Users can access their health reports conveniently through mobile devices, enhancing accessibility and usability.

6. Anti-Radiation Shields: Integrated into the spine brace bands, ensuring user safety during prolonged usage.

By leveraging sensor technology, cloud-based analysis, and mobile accessibility, our solution aims to provide users with comprehensive insights into their spinal health. We prioritize user-friendliness, cost-effectiveness, and safety, addressing the limitations of existing evaluation methods. Our project envisions a future where monitoring spinal alignment is accessible, easy, and integral to overall well-being.

--------------------------------------------------------------------------------------------------------------------------------------------------------------

Arduion ide code - 

#include <WiFi.h>
#include <HTTPClient.h>

#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "FLEX-PK";
const char* password = "123456789";
const char* serverName = "http://api.thingspeak.com/update";
String apiKey = "PZ9SW6QMRMUL3G4U";
const int flexPin = 34;

int initPos;
int rawFlexValue;

void setup() {
  Serial.begin(115200);
  pinMode(flexPin, INPUT);
  initPos = calibrateSensor();
  WiFi.begin(ssid, password);
  Serial.println("Connecting");
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  if(WiFi.status() == WL_CONNECTED) {
    WiFiClient client;
    HTTPClient http;
    delay(10000);
    rawFlexValue = analogRead(flexPin);
    int deviation = map(rawFlexValue, initPos, 4095, -255, 255);
    Serial.print("Raw Value: ");
    Serial.print(rawFlexValue);
    Serial.print("\tDeviation: ");
    Serial.println(deviation);
    http.begin(client, serverName);
    http.addHeader("Content-Type", "application/x-www-form-urlencoded");
    String httpRequestData = "api_key=" + apiKey + "&field1=" + String(rawFlexValue) + "&field2=" + String(deviation);
    int httpResponseCode = http.POST(httpRequestData);
    Serial.print("HTTP Response code: ");
    Serial.println(httpResponseCode);
    http.end();
  } else {
    Serial.println("WiFi Disconnected");
  }
}

int calibrateSensor() {
  int calibrationValue = 0;
  int numReadings = 10;
  for (int i = 0; i < numReadings; i++) {
    calibrationValue += analogRead(flexPin);
    delay(50);
  }
  calibrationValue /= numReadings;
  Serial.print("Calibration Value: ");
  Serial.println(calibrationValue);
  return calibrationValue;
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------

Join us in our endeavor to promote spinal health and well-being for all. Let's pave the way towards a healthier future with FutureTech.
